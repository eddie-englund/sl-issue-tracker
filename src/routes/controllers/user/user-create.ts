import { getDI } from '../../../db/db';
import { Request, Response } from 'express';
import { handleError } from 'helpers/handle-error';

export const createUser = async (req: Request, res: Response) => {
  const DI = getDI();
  const newUser = DI.userRepo.create(req.body)

  const user = await DI.userRepo
    .persist(newUser)
    .flush()
    .catch(e => handleError(e, res))

  if (!user) return handleError("Failed to save user", res)
  return res.status(201).send({ success: true })
}