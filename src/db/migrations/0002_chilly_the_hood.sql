CREATE TABLE "study_room" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"file_url" text NOT NULL,
	"file_key" text NOT NULL,
	"page_count" integer,
	"status" text DEFAULT 'active',
	"owner_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "study_room" ADD CONSTRAINT "study_room_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;