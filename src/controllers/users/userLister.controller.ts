import { Request, Response } from "express";
import userListerService from "../../services/user/userLister.service";

const userListerController = (req: Request, res: Response) => {
  try {
    const users = userListerService();
    return res.send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListerController;
