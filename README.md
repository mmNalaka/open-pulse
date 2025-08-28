# open-pulse

OpenPulse is an open-source, privacy-first web analytics platform—lightweight, simple, and easy to self-host. It captures essential metrics (page views, events, referrers, devices, geography) without cookies or personal data, using anonymized, GDPR-friendly tracking. Built for fast setup and learning, it includes a real-time dashboard, a tiny JS snippet/SDK for quick integration, and an MIT-licensed codebase that welcomes collaboration.

## Features

- **TypeScript** - For type safety and improved developer experience
- **TanStack Router** - File-based routing with full type safety
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Elysia** - Type-safe, high-performance framework
- **Bun** - Runtime environment
- **Drizzle** - TypeScript-first ORM
- **PostgreSQL** - Database engine
- **Authentication** - Email & password authentication with Better Auth
- **Turborepo** - Optimized monorepo build system
- **Husky** - Git hooks for code quality

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Database Setup

This project uses PostgreSQL with Drizzle ORM.

1. Make sure you have a PostgreSQL database set up.
2. Update your `apps/server/.env` file with your PostgreSQL connection details.

3. Apply the schema to your database:

```bash
bun db:push
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
The API is running at [http://localhost:3000](http://localhost:3000).

## Deployment (Alchemy)

- Web dev: cd apps/web && bun dev
- Web deploy: cd apps/web && bun deploy
- Web destroy: cd apps/web && bun destroy

## Project Structure

```
open-pulse/
├── @app-web/         # Frontend application (React + TanStack Router)
├── @service-core/      # Backend API (Elysia)
├── @app-docs/         # Documentation (Next.js + Fumadocs)
```

## Available Scripts

- `bun dev`: Start all applications in development mode
- `bun build`: Build all applications
- `bun dev:web`: Start only the web application
- `bun dev:server`: Start only the server
- `bun check-types`: Check TypeScript types across all apps
- `bun db:push`: Push schema changes to database
- `bun db:studio`: Open database studio UI

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
