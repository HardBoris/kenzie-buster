import { User } from "./../../entities/user.entity";
import { AppDataSource } from "./../../data-source";
import { IUserIndividual } from "./../../interfaces/index";
import jwt from "jsonwebtoken";

const userIndividualService = async ({ authorization }: IUserIndividual) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  if (!authorization) {
    throw new Error("No authorization token found");
  }

  const token = authorization.split(" ")[1];

  const account = jwt.verify(
    token,
    String(process.env.JWT_SECRET),
    (err, decoded) => {
      if (!decoded) {
        throw new Error("Invalid token");
      }
      const user = users.find((user) => user.email === (<any>decoded).email);
      return user;
    }
  );

  return account;
};

export default userIndividualService;
