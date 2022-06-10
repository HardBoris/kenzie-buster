import { User } from "../entities/User";

const Reducer = (user: User): Partial<User> => {
  const { password, ...reducido } = user;
  return reducido;
};

export { Reducer };
