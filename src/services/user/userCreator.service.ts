import { AppDataSource } from "./../../data-source";
import { User } from "../../entities/user.entity";
import { IUserCreator } from "../../interfaces/user";
import bcrypt from "bcrypt";
import { Reducer } from "../../utils";
import { AppError } from "../../errors/appError";

const userCreatorService = async ({
  name,
  email,
  password,
  isAdm = false,
}: IUserCreator) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    throw new AppError(409, "Email Already Exists");
  }

  const user = new User();
  user.name = name;
  user.email = email.toLowerCase();
  user.password = bcrypt.hashSync(password, 10);
  user.isAdm = isAdm;

  userRepository.create(user);
  await userRepository.save(user);

  const userReduced = Reducer(user);

  return userReduced;
};

export default userCreatorService;
