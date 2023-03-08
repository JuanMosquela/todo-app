import pg from "pg";
const Pool = pg.Pool;
import "dotenv/config";

const pool = new Pool({
  user: "postgres",
  password: process.env.PASSWORD,
  host: "******-a.oregon-postgres.render.com",
  port: 5432,
  database: "todo-app",
});

export default pool;
