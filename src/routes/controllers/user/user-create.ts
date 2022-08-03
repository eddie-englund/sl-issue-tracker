import { getDI } from "../../../db/db";
import { Request, Response } from "express";
import { handleError } from "../../../helpers/handle-error";
import * as argon2 from "argon2";

export const createUser = async (req: Request, res: Response) => {
  const DI = getDI();
  const { username: email, password } = req.body;

  try {
    const hashPassword = await argon2.hash(password);

    const newUser = DI.userRepo.create({
      email,
      password: hashPassword,
      created: new Date(),
    });

    await DI.userRepo.persist(newUser).flush();

    return res.status(201).send({ success: true });
  } catch (err: any) {
    console.error(`${Date.now().toLocaleString}: Error => ${err}`);
    return res.status(500).send(handleError(err));
  }
};
