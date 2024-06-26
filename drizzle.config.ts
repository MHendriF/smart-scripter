import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

const DRIZZLE_DB_URL = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!;

export default defineConfig({
  schema: "./utils/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DRIZZLE_DB_URL,
  },
  verbose: true,
  strict: true,
});
