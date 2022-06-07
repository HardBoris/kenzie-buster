import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userSelfDeletorService from "../../services/user/userSelfDeletor.service";

const userSelfDeletorController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;
    const user = await userSelfDeletorService(email);
    return res.status(200).json({ message: "User deleted with success!" });
  } catch (err) {
    if (err instanceof Error) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
};

export default userSelfDeletorController;
