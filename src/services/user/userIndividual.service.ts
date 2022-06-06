import { User } from "./../../entities/user.entity";
import { AppDataSource } from "./../../data-source";

const userIndividualService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);

  return account;
};

export default userIndividualService;
