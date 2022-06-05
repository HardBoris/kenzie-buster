import { User } from "./../../entities/user.entity";
import { AppDataSource } from "./../../data-source";
import { IuserLoger } from "./../../interfaces/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLogerService = async ({ email, password }: IuserLoger) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new Error("Wrong email / password");
  }
  if (!bcrypt.compareSync(password, account.password)) {
    throw new Error("Wrong email / password");
  }

  const token = jwt.sign({ email: email }, String(process.env.JWT_SECRET), {
    expiresIn: "1d",
  });

  return token;
};

export default userLogerService;
