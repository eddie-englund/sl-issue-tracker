import { MikroORM } from '@mikro-orm/core';
import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package
import 'reflect-metadata';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

let globalOrm: MikroORM<PostgreSqlDriver>;
let counter = 0;

export const initPostgres = async (): Promise<void> => {
  const orm = await MikroORM.init<PostgreSqlDriver>({
    entities: ['./dist/db/entities'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
    dbName: process.env.DB_NAME,
    type: 'postgresql',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: '127.0.0.1',
    // clientUrl: `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@127.0.0.1:5432/${process.env.DB_NAME}`,
    metadataProvider: TsMorphMetadataProvider
  });

  const hasConnection = await orm.isConnected();

  const connect = await orm.connect()
  console.log(connect)
  
  if (!orm || !hasConnection) {
    console.log(orm, hasConnection)
    console.error(`Error initalizing MirkoOrm. Got: ${orm}, attempting to connect again...`)
    // initPostgres()
  } 

  globalOrm = orm;
}


export const getDB = (): MikroORM<PostgreSqlDriver> => {
  if (!globalOrm) throw new Error("No postgres ORM defined")
  return globalOrm
};
