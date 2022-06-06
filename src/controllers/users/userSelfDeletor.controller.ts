import { Request, Response } from "express";
import userSelfDeletorService from "../../services/user/userSelfDeletor.service";

const userSelfDeletorController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;
    const user = await userSelfDeletorService(email);
    return res.status(200).json({ message: "User deleted with success!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userSelfDeletorController;
