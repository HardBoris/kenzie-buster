import { User } from "../entities/user.entity";

const Reducer = (user: User): Partial<User> => {
  const { password, ...reducido } = user;
  return reducido;
};

export { Reducer };
