import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/postgres/postgres.schema.ts',
  out: './src/db/postgres/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
  },
});
