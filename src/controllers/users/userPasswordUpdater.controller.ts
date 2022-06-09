import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userPasswordUpdaterService from "../../services/user/userPasswordUpdater.service";

const userPasswordUpdaterController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;
    const { password } = req.body;

    if (!password) {
      throw new Error("No password informed.");
    }

    const user = await userPasswordUpdaterService(email, password);
    return res.status(200).json({ message: "Password updated!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userPasswordUpdaterController;
