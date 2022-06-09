import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import userIndividualService from "../services/user/userIndividual.service";

const userIndividualController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;
    const user = await userIndividualService(email);
    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userIndividualController;
