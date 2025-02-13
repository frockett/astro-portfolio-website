import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const Views = sqliteTable('Views', {
  slug: text('slug').primaryKey(),
  count: integer('count').default(1),
});
