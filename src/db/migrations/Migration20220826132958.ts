import { Migration } from '@mikro-orm/migrations';

export class Migration20220826132958 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "base_entity" ("id" uuid not null, "created" timestamptz(0) not null, constraint "base_entity_pkey" primary key ("id"));');

    this.addSql('create table "issue" ("id" uuid not null, "created" timestamptz(0) not null, "description" varchar(255) not null, "vehicle" varchar(255) not null, constraint "issue_pkey" primary key ("id"));');

    this.addSql('create table "user" ("id" uuid not null, "created" timestamptz(0) not null, "email" varchar(255) not null, "password" varchar(255) not null, constraint "user_pkey" primary key ("id"));');
  }

}
