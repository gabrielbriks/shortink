import { createClient } from "redis";

const redis = createClient({
  url: "redis://:docker@localhost:6379", // Here not have username
  // database: 1, //In redis not exist name of db, this names is number up to 11
});

redis.connect();

export default redis;
