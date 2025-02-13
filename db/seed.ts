
import path from 'path';
import fs from 'fs';

const dbEnv = process.env.ASTRO_DATABASE_FILE || '';
const relativePath = dbEnv.replace(/^file:(\/\/)?/, '');
const dbFile = path.resolve(process.cwd(), relativePath);

// https://astro.build/db/seed
export default async function seed() {
	
	if (fs.existsSync(dbFile)) {
		console.log('Database file exists – preserving existing data.');
		return;
	}
  
  console.log('Database file not found – seeding initial data.');
}
