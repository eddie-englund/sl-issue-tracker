import 'reflect-metadata';
import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import dotenv from 'dotenv';

dotenv.config();

const config: Options<PostgreSqlDriver> = {
  entities: ['./dist/db/entities'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/db/entities'], // path to our TS entities (src), relative to `baseDir`,
    dbName: process.env.DB_NAME,
    type: 'postgresql',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: 'postgres',
    port: 5432,
    forceUtcTimezone: true,
    debug: true,
    driver: PostgreSqlDriver,
    metadataProvider: TsMorphMetadataProvider,
    migrations: {
      path: 'dist/db/migrations',
      pathTs: 'src/db/migrations',
    }
}
export default config