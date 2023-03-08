import pg from "pg";
const Pool = pg.Pool;
import "dotenv/config";

const pool = new Pool({
  user: "postgres",
  password: process.env.PASSWORD,
  host: "localhost",
  port: 5432,
  database: "todos",
});

export default pool;
