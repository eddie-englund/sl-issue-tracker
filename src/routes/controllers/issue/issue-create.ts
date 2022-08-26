import { getDI } from "../../../db/db";
import { Request, Response } from "express";
import { handleError } from "../../../helpers/handle-error";
import { v4 as uuid } from 'uuid'

export const createIssue = async (req: Request, res: Response) => {
  const DI = getDI();

  try {
    const newIssue = DI.issueRepo.create({
      id: uuid(),
      description: req.body.description,
      vehicle: req.body.vehicle,
      created: new Date()
    });

    await DI.issueRepo
    .persist(newIssue)
      .flush()

    return res.status(201).send({ success: true });
  } catch (err: any) {
    console.error(`${Date.now().toLocaleString()}: Error => ${err}`);
    return res.status(500).send(handleError(err));
  }
};
