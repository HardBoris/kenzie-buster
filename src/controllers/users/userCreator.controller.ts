import { Request, Response } from "express";
import userCreatorService from "../../services/user/userCreator.service";

const userCreatorController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdm } = req.body;

    const newUser = await userCreatorService({ name, email, password, isAdm });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userCreatorController;
