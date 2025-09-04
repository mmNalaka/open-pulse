import { Elysia } from 'elysia';

function getSystemInfo() {
  return {
    version: process.env.APP_VERSION || '1.0.0',
    app: 'OpenPulse',
    status: 'OK',
    timestamp: new Date().toISOString(),
  };
}

export const healthRoutes = new Elysia().group('/health', (app) =>
  app
    // Basic health check - for load balancers and simple monitoring
    .get(
      '/',
      ({ set }) => {
        set.headers = {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        };
        return { status: 'OK' };
      },
      {
        detail: {
          tags: ['Health'],
          summary: 'Basic health check',
          description:
            'Simple health check endpoint for load balancers and monitoring systems',
        },
      }
    )

    // Liveness probe - for Kubernetes/container orchestration
    .get(
      '/liveness',
      ({ set }) => {
        set.headers = {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        };
        // Liveness just checks if the application is running
        return { status: 'alive', timestamp: new Date().toISOString() };
      },
      {
        detail: {
          tags: ['Health'],
          summary: 'Liveness probe',
          description:
            'Liveness check for container orchestration systems like Kubernetes',
        },
      }
    )

    // System information - for diagnostics
    .get(
      '/info',
      ({ set }) => {
        set.headers = {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        };

        return {
          ...getSystemInfo(),
          timestamp: new Date().toISOString(),
        };
      },
      {
        detail: {
          tags: ['Health'],
          summary: 'System information',
          description: 'Provides system information for diagnostic purposes',
        },
      }
    )
);
