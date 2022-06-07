import { AppError, handleError } from "./../../errors/appError";
import { Request, Response } from "express";
import userListerService from "../../services/user/userLister.service";

const userListerController = async (req: Request, res: Response) => {
  try {
    const users = await userListerService();
    return res.send(users);
  } catch (err) {
    if (err instanceof Error) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
};

export default userListerController;
