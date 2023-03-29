import Database from 'better-sqlite3';

// Setup database
export const db = new Database('blog.sqlite');
db.pragma('journal_mode = WAL');

// Create tables
db.prepare(`CREATE TABLE IF NOT EXISTS post (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  article TEXT NOT NULL
);`).run();
