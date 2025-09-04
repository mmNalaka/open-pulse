import { authRoutes } from './auth.routes';
import { healthRoutes } from './health.routes';
import { notFoundRoutes } from './notfound.routes';

// Group all routes
export const appRouter = {
  healthRoutes,
  authRoutes,
  notFoundRoutes,
};

// Export the router type
export type AppRouter = typeof appRouter;
