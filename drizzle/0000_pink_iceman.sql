CREATE TABLE `classes` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`name` text NOT NULL,
	`level` text NOT NULL,
	`minutes` integer DEFAULT 50 NOT NULL,
	`progress` text DEFAULT '{}' NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_classes_owner` ON `classes` (`owner`);