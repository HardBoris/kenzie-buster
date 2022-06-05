import { Request, Response } from "express";
import userLogerService from "../services/user/userLoger.service";

const userLogerController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await userLogerService({ email, password });

    return res.status(201).json({ token });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userLogerController;
