import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRE_URL,
  },
  tablesFilter: ["t4gallery_*"],
} satisfies Config;
