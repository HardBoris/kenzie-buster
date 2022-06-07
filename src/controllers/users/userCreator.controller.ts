import { Request, Response } from "express";
import userCreatorService from "../../services/user/userCreator.service";
import { AppError, handleError } from "../../errors/appError";

const userCreatorController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdm, paid } = req.body;

    const newUser = await userCreatorService({ name, email, password, isAdm });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userCreatorController;
