import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const userCreateSchema = z.object({
  username: z
    .string()
    .trim()
    .max(128)
    .email({ message: 'Invalid email.' }),
  password: z
    .string()
    .trim()
    .min(6)
    .max(256)
})

export type UserCreateSchema = z.infer<typeof userCreateSchema>

export const userCreateValidator = async (req: Request,
                                          res: Response,
                                          next: NextFunction) => {
  const parse = await userCreateSchema.safeParseAsync(req.body)
  if (!parse.success) return res.status(400).send(parse.error)
  req.body = parse.data
  next()
}