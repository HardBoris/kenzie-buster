import { AppError } from "./../errors/appError";
import { User } from "./../entities/user.entity";
import { AppDataSource } from "./../data-source";
import { Request, Response, NextFunction } from "express";

const verifyEmail = async (req: Request, _: Response, next: NextFunction) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const userExists = users.find((user) => user.email === req.body.email);
  // const userFound: User = await userRepository.findOne({
  //   email: req.validated.email,
  // })

  if (userExists) {
    throw new AppError(409, "Email Already Exists");
  }

  return next();
};

export default verifyEmail;
