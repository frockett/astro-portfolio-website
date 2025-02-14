import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

// Connect to your local file—this file will persist on disk
const sqliteDB = new Database('./data/astro.db', {
  // You can add options like { verbose: console.log } for debugging
});


// Initialize Drizzle ORM with your connection
export const dbClient = drizzle(sqliteDB);
