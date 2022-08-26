import { MikroORM } from '@mikro-orm/core';
import { EntityManager, EntityRepository, PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package
import 'reflect-metadata';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Issue } from './entities/issue-entity';
import { User } from './entities/user-entity';
import config from '../mikro-orm.config';


interface DI {
  orm: MikroORM<PostgreSqlDriver>;
  em: EntityManager,
  issueRepo: EntityRepository<Issue>
  userRepo: EntityRepository<User>
}
let globalOrm: DI;

export const initPostgres = async (): Promise<DI> => {
  const orm = await MikroORM.init(config);

  globalOrm = {
    orm,
    em: orm.em.fork(),
    userRepo: orm.em.fork().getRepository(User),
    issueRepo: orm.em.fork().getRepository(Issue)
  }

  return globalOrm
}


export const getDI = (): DI => globalOrm
