import pg from "pg";
const Pool = pg.Pool;
import "dotenv/config";

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  database: process.env.DATABASE,
});

export default pool;
