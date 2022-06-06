import { AppDataSource } from "./../../data-source";
import { User } from "../../entities/user.entity";
import { IUserCreator } from "../../interfaces";
import bcrypt from "bcrypt";

const userCreatorService = async ({
  name,
  email,
  password,
  isAdm = false,
}: IUserCreator) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email Already Exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.isAdm = isAdm;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreatorService;
