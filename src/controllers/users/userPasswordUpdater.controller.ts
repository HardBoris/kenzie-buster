import { Request, Response } from "express";
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
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userPasswordUpdaterController;
