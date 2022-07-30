import { Application, json } from 'express';
import helmet from 'helmet';
import { initPostgres } from './db/init';
import cors from 'cors';

export const initApp = async (app: Application): Promise<void> => {
  app.use(json())
  app.use(helmet())
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin) return callback(new Error('Origin is missing?!'))
      if (process.env.CORS_ORIGIN?.includes(origin)) callback(null, true)
      else callback(new Error(`Origin ${origin} is not whitelisted.`))
    }
  }))

  await initPostgres()

  app.listen(() => console.info(`App started, listening on port ${process.env.EXPRESS_PORT}`))
}