import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
});

