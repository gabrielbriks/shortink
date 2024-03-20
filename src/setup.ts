//create sctruture of my db in postgresql
import { sql } from "./lib/postgres";

async function setup() {
  //TODO: Fix name "create_at" to "created_at"
  await sql/*sql*/ `
    CREATE TABLE IF NOT EXISTS short_links (
      id SERIAL PRIMARY KEY,
      code TEXT UNIQUE,
      original_url TEXT,
      create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  //Close connection with db
  await sql.end();

  console.log("Setup successfully completed");
}

setup();
