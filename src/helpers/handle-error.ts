import { Response } from 'express';

export const handleError = (err: string, res: Response) => {
  console.error(`${Date.now().toLocaleString}: Error => ${err}`)
  return res.status(500).send({ success: false, error: err })
}