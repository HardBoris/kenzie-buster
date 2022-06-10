import { User } from "../../entities/User";
import { AppDataSource } from "./../../data-source";
import { Reducer } from "../../utils";

const userIndividualService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = users.find((user) => user.email === email);

  // const userReduced = Reducer(user);

  return user;
};

export default userIndividualService;
