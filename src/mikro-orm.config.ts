import 'reflect-metadata';
import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import dotenv from 'dotenv';

dotenv.config();

const config: Options<PostgreSqlDriver> = {
  entities: ['./dist/db/entities'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/db/entities'], // path to our TS entities (src), relative to `baseDir`,
    dbName: process.env.POSTGRES_NAME,
    type: 'postgresql',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
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