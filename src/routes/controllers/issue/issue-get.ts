import { getDI } from '@db/db';
import { Request, Response } from 'express';

export const getIssue = async (req: Request, res: Response) => {
  try {
    const issue = await getDI().issueRepo.findOne({ id: req.body.id })
    return res.status(200).send({ success: true, data: { ...issue } })
  } catch (err: any) {
    console.warn(`Cannot find issue with ${req.body.id}`, err)
    return res.status(400).send({ msg: "Cannot find a issue with that ID", success: false })
  }
}
