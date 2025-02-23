import fastify from "fastify";
import postgres from "postgres";
import { z } from "zod";
import { sql } from "./lib/postgres";
import redis from "./lib/redis";

const app = fastify();

//Redirect to link per code
app.get("/:code", async (request, reply) => {
  const getCodeLinkSchema = z.object({
    code: z.string().min(3),
  });

  const { code } = getCodeLinkSchema.parse(request.params);

  const result = await sql/*sql*/ `
    SELECT id, original_url FROM short_links
    WHERE short_links.code = ${code}
  `;

  const link = result[0];

  if (result.length === 0) {
    return reply.status(400).send({ message: "Link not found." });
  }

  await redis.zIncrBy("metrics", 1, String(link.id));

  /** Status Code of redirection
   * 301 = Permanent
   * 302 = Temporary
   */
  return reply.status(301).redirect(link.original_url);
});

//List Links
app.get("/api/links", async () => {
  const result = await sql/*sql*/ `
    SELECT * FROM short_links
    ORDER BY create_at DESC
  `;

  return result;
});

//Create new Link
app.post("/api/links", async (request, reply) => {
  const createLinkSchema = z.object({
    code: z.string().min(3),
    url: z.string().url(),
  });

  try {
    const { code, url } = createLinkSchema.parse(request.body);

    const result = await sql/*sql*/ `
    INSERT INTO short_links (code, original_url)
    VALUES (${code}, ${url})
    RETURNING id
  `;

    const link = result[0];

    return reply.status(201).send({
      shortLinkId: link.id,
    });
  } catch (error) {
    if (error instanceof postgres.PostgresError) {
      if (error.code === "23505") {
        return reply.status(400).send({ message: "Duplicated code url!" });
      }
    }

    console.error(error);

    return reply.status(500).send({ message: "Internal server error." });
  }
});

app.get("/api/metrics", async () => {
  const result = await redis.zRangeByScoreWithScores("metrics", 0, 50);

  const metrics = result
    .sort((a, b) => b.score - a.score)
    .map((item) => {
      return {
        shortLinkId: Number(item.value),
        clicks: item.score,
      };
    });
  return metrics;
});

app
  .listen({
    port: 3333,
    // host: "0.0.0.0",
  })
  .then(() => console.log("HTTP Server Running"))
  .catch(() => console.log("ERROR: Not Server Running"));
