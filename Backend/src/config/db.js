import Database from "better-sqlite3";

const db = new Database("movies.db");

db.prepare(
  `CREATE TABLE IF NOT EXISTS recommendations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_input TEXT NOT NULL,
    recommended_movies TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`
).run();

console.log("SQLite connected");
export default db;
