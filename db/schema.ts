import { sqliteTable,text,integer,index } from 'drizzle-orm/sqlite-core';
export const classes=sqliteTable('classes',{id:text('id').primaryKey(),owner:text('owner').notNull(),name:text('name').notNull(),level:text('level').notNull(),minutes:integer('minutes').notNull().default(50),progress:text('progress').notNull().default('{}')},t=>[index('idx_classes_owner').on(t.owner)]);
export const profiles=sqliteTable('profiles',{id:text('id').primaryKey(),email:text('email').notNull(),name:text('name').notNull()});
