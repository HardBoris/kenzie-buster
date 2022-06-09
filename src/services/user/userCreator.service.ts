import { AppDataSource } from "./../../data-source";
import { User } from "../../entities/user.entity";
import { IUserCreator } from "../../interfaces/user";
import bcrypt from "bcrypt";
import { Reducer } from "../../utils";

const userCreatorService = async ({
  name,
  email,
  password,
  isAdm = false,
}: IUserCreator) => {
  const userRepository = AppDataSource.getRepository(User);

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
