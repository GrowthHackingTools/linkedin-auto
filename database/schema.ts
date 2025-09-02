import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const peopleTable = pgTable('people_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  linkedin_url: text("linkedin_url").notNull(),
  company_url: text("company_url"),
  notes: text("notes")
})

