CREATE TABLE "people_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"linkedin_url" text NOT NULL,
	"company_url" text,
	"notes" text
);
