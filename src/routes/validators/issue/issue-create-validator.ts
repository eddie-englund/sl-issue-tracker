import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const issueCreateSchema = z.object({
  adminUsername: z
    .string()
    .trim()
    .min(6)
    .max(256),
  adminPassword: z
    .string()
    .trim()
    .min(6)
    .max(256),
  description: z
    .string()
    .trim()
    .min(10)
    .max(512),
  vehicle: z
    .string()
    .trim()
    .min(1)
    .max(512),
  created: z.date()
})

export type IssueCreateSchema = z.infer<typeof issueCreateSchema>

export const issueCreateValidator = async (req: Request,
                                          res: Response,
                                          next: NextFunction) => {
  const parse = await issueCreateSchema.safeParseAsync(req.body)
  if (!parse.success) return res.status(400).send(parse.error)
  req.body = parse.data
  next()
}