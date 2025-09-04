import 'dotenv/config';

import { cors } from '@elysiajs/cors';
import { Elysia } from 'elysia';

import { CORS_CONFIG } from './config/app.config';
import { openapiHandler } from './lib/openapi';
import { authRoutes } from './routers/auth.routes';
import { healthRoutes } from './routers/health.routes';

const PORT = 3000;

export const app = new Elysia()
  // Global middleware
  .use(cors(CORS_CONFIG))
  .use(openapiHandler)

  // Routes
  .use(healthRoutes)
  .use(authRoutes)

  .listen(PORT, () => {
    process.stdout.write(`Server is running on http://localhost:${PORT}\n`);
  });
