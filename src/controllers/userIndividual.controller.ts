import { Request, Response } from "express";
import userIndividualService from "../services/user/userIndividual.service";

const userIndividualController = async (req: Request, res: Response) => {
  try {
    const user = await userIndividualService({
      authorization: req.headers.authorization,
    });
    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userIndividualController;
