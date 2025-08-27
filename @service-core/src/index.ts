import 'dotenv/config';
import { cors } from '@elysiajs/cors';
import { Elysia } from 'elysia';
import { auth } from './lib/auth';

const STATUS = 405;
const PORT = 3000;

export const app = new Elysia()
  .use(
    cors({
      origin: process.env.CORS_ORIGIN || '',
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    })
  )
  .all('/api/auth/*', (context) => {
    const { request } = context;
    if (['POST', 'GET'].includes(request.method)) {
      return auth.handler(request);
    }
    context.error(STATUS);
  })
  .get('/', () => 'OK')
  .listen(PORT, () => {
    process.stdout.write(`Server is running on http://localhost:${PORT}\n`);
  });
