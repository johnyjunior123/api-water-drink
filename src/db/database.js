import dotenv from "dotenv";
import pg from "pg";
import fs from "fs";

dotenv.config();
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("Base de Dados conectado com sucesso!");
});

const sqlFilePath = "src/db/migrations/init.sql";
const sqlQuery = fs.readFileSync(sqlFilePath, "utf8");
// pool.query(sqlQuery);
console.log("created tables");

export default function query(text, params) {
  return pool.query(text, params);
}
