import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";
import { Reducer } from "../../utils";

const userListerService = async (): Promise<Partial<User>[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await (
    await userRepository.find()
  ).map((u: User) => Reducer(u));
  return users;
};

export default userListerService;
