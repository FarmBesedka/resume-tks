import Database from 'better-sqlite3'

let db: Database.Database | null = null

export const getDB = () => {
  db = new Database('server/db/resume.db')
  db.pragma('journal_mode = WAL')
  initTables()
  return db
}

const initTables = () => {
  if (!db) return
  db.prepare(
    `CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY,
    name TEXT,
    slug TEXT,
    link TEXT,
    shortDescription TEXT,
    description TEXT
  )`,
  ).run()
}
