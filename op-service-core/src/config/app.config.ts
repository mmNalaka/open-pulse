import type { cors } from '@elysiajs/cors';

// CORS configuration
type CORSOptions = Parameters<typeof cors>[0];

export const CORS_CONFIG: CORSOptions = {
  origin: process.env.CORS_ORIGIN || '',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
