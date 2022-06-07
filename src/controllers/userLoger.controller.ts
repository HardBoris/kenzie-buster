import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import userLogerService from "../services/user/userLoger.service";

const userLogerController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await userLogerService({ email, password });

    return res.status(201).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userLogerController;
