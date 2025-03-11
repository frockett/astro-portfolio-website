import { dbClient } from './db';
import { Views } from './schema';
import { sql, eq, desc } from 'drizzle-orm';

// Get view count without incrementing
export async function getViewCount(slug) {
  const result = await dbClient
    .select({ count: Views.count })
    .from(Views)
    .where(eq(Views.slug, slug));
  
  return result.length > 0 ? result[0].count : 0;
}

// Increment view count (for the second component)
export async function incrementViewCount(slug) {
  return dbClient
    .insert(Views)
    .values({ slug, count: 1 })
    .onConflictDoUpdate({
      target: Views.slug,
      set: { count: sql`count + 1` },
    })
    .returning({
      slug: Views.slug,
      count: Views.count,
    })
    .then((res) => res[0]);
}

// Get top articles by view count
export async function getTopArticles(limit = 3) {
  return dbClient
    .select({
      slug: Views.slug,
      count: Views.count,
    })
    .from(Views)
    .orderBy(desc(Views.count))
    .limit(limit);
}
