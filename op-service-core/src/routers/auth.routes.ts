import Elysia from 'elysia';
import { auth } from '@/lib/auth';

export const authRoutes = new Elysia().all('/api/auth/*', (context) => {
  const { request } = context;
  if (['POST', 'GET'].includes(request.method)) {
    return auth.handler(request);
  }
  context.status('Method Not Allowed');
});
