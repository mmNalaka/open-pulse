import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// biome-ignore lint/performance/noNamespaceImport: no treeshaking needed for schema
import * as schema from './postgres.schema';

// Create a Postgres client using the DATABASE_URL environment variable
export const pgClient = postgres(process.env.DATABASE_URL || '');

// Initialize Drizzle with the client
export const db = drizzle(pgClient, { schema });
