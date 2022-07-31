import { getDI } from '../../../db/db';
import { Request, Response } from 'express';
import { handleError } from 'helpers/handle-error';
export const createIssue = async (req: Request, res: Response) => {
  const DI = getDI();
  const newIssue = DI.issueRepo.create(req.body)

  const user = await DI.issueRepo
    .persist(newIssue)
    .flush()
    .catch(e => handleError(e, res))

  if (!user) return handleError("Failed to save issue", res)
  return res.status(201).send({ success: true })
}