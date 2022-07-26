import { NextFunction, Request, Response } from 'express';

export const verifyLocalAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.adminUsername === process.env.APP_USERNAME && req.body.adminPassword === process.env.APP_PASSWORD) next()
  else return res.status(401).send({ msg: "You're not a valid admin!", success: false })
}
