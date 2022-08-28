import { getDI } from '../../../db/db';
import { Request, Response } from 'express';
import { QueryOrder } from '@mikro-orm/core';

export const getIssues = async (_: Request, res: Response) => {
  const data = await getDI().issueRepo.findAll({ orderBy: { created: QueryOrder.DESC } });
  return res.status(200).send({ success: true, data })
}