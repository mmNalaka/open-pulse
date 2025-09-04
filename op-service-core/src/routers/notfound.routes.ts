import { Elysia } from 'elysia';

export const notFoundRoutes = new Elysia().all('*', () => {
  return {
    status: 404,
    message: 'Not Found',
  };
});
