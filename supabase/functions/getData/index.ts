// Setup type definitions for built-in Supabase Runtime APIs
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import postgres from "postgres";

const peopleTable = pgTable('people_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  linkedin_url: text("linkedin_url").notNull(),
  company_url: text("company_url"),
  notes: text("notes")
})

Deno.serve(async () => {
  const connectionString = Deno.env.get("SUPABASE_DB_URL")!;

  // Disable prefetch as it is not supported for "Transaction" pool mode
  const client = postgres(connectionString, { prepare: false });
  const db = drizzle({ client });

  await db.insert(peopleTable).values({
    name: "Alice",
    age: 25,
    linkedin_url: "https://linkedin.com/in/alice",
  })
  const data = await db.select().from(peopleTable);

  return new Response(
    JSON.stringify(data)
  )
})
