import { getDI } from "../../../db/db";
import { Request, Response } from "express";
import { handleError } from "../../../helpers/handle-error";

export const createIssue = async (req: Request, res: Response) => {
  const DI = getDI();
  const newIssue = DI.issueRepo.create(req.body);

  const user = await DI.issueRepo
    .persist(newIssue)
    .flush()
    .catch((e) => res.status(500).send(handleError(e)));

  if (!user) return res.status(500).send(handleError("Failed to save user"));
  return res.status(201).send({ success: true });
};
