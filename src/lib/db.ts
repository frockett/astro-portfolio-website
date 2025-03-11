import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname } from 'path';
import { Views } from './schema';

const DB_PATH = './data/astro.db';

async function ensureDirectoryExists() {
  const dir = dirname(DB_PATH);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function setupDatabase() {
  await ensureDirectoryExists();
  
  const sqlite = new Database(DB_PATH);
  const db = drizzle(sqlite);
  
  // Check if Views table exists
  const tableExists = sqlite.prepare(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='Views'"
  ).get();
  
  if (!tableExists) {
    console.log('Creating Views table...');
    sqlite.exec(`
      CREATE TABLE IF NOT EXISTS Views (
        slug TEXT PRIMARY KEY,
        count INTEGER DEFAULT 1
      )
    `);
  }
  
  return db;
}

export const dbClient = await setupDatabase();
