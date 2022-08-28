import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const issueGetSchema = z.object({
  id: z
    .string()
    .trim()
    .uuid()
})

export type IssueGetSchema = z.infer<typeof issueGetSchema>

export const issueGetValidator = async (req: Request, res: Response, next: NextFunction) => {
  const parse = await issueGetSchema.safeParseAsync(req.params)
  if (!parse.success) return res.status(400).send(parse.error)
  req.body = parse.data
  next()
}