/** biome-ignore-all lint/performance/noNamespaceImport: no treeshaking needed for schema */
/** biome-ignore-all lint/suspicious/noExplicitAny: third party */
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { apiKey, jwt, openAPI, organization } from 'better-auth/plugins';

import { db } from '../db/postgres';
import * as schema from '../db/postgres/postgres.schema';

export const auth: any = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',

    schema,
  }),
  trustedOrigins: [process.env.CORS_ORIGIN || ''],
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
    },
  },
  plugins: [openAPI(), jwt(), organization(), apiKey()],
});
