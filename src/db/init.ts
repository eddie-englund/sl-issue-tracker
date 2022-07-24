import { MikroORM } from '@mikro-orm/core';
import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package
import 'reflect-metadata';

let globalOrm: MikroORM<PostgreSqlDriver>;

export const initPostgres = async (): Promise<MikroORM<PostgreSqlDriver>> => {
  const orm = await MikroORM.init<PostgreSqlDriver>({
    entities: ['./dist/entities'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['@/src/entities'], // path to our TS entities (src), relative to `baseDir`
    dbName: process.env.DB_NAME,
    type: 'postgresql',
  });

  globalOrm = orm;
  return orm
}

export const getDB = (): MikroORM<PostgreSqlDriver> => {
  if (!globalOrm) throw new Error("No postgres ORM defined")
  return globalOrm
};
