import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const issueCreateSchema = z.object({
  id: z
    .string()
    .trim()
    .uuid()
})

export type IssueCreateSchema = z.infer<typeof issueCreateSchema>

export const issueCreateValidator = async (req: Request, res: Response, next: NextFunction) => {
  const parse = await issueCreateSchema.safeParseAsync(req.body)
  if (!parse.success) return res.status(400).send(parse.error)
  req.body = parse.data
  next()
}