import { Application, json } from 'express';
import helmet from 'helmet';
import { initPostgres } from './db/db';
import cors from 'cors';
import { RequestContext } from '@mikro-orm/core';
import { router } from './routes/router';

export const initApp = async (app: Application): Promise<void> => {
  app.use(json())
  app.use(helmet())
  app.use(cors({ origin: process.env!.CORS_ORIGINS.split(',') }))
  // Register routes
  router(app)

  const DI = await initPostgres()

  app.use((_req, _res, next) => RequestContext.create(DI.orm.em, next))

  app.listen(
    process.env.EXPRESS_PORT,
    () => console.info(`App started, listening on port ${process.env.EXPRESS_PORT}`)
  )
}