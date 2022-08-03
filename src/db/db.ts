import { MikroORM } from '@mikro-orm/core';
import { EntityManager, EntityRepository, PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package
import 'reflect-metadata';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Issue } from './entities/issue-entity';
import { User } from './entities/user-entity';


interface DI {
  orm: MikroORM<PostgreSqlDriver>;
  em: EntityManager,
  issueRepo: EntityRepository<Issue>
  userRepo: EntityRepository<User>
}
let globalOrm: DI;

export const initPostgres = async (): Promise<DI> => {
  const orm = await MikroORM.init<PostgreSqlDriver>({
    entities: ['./dist/db/entities'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
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
  });

  globalOrm = {
    orm,
    em: orm.em.fork(),
    userRepo: orm.em.fork().getRepository(User),
    issueRepo: orm.em.fork().getRepository(Issue)
  }

  return globalOrm
}


export const getDI = (): DI => globalOrm
