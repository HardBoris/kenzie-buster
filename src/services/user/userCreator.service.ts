import { AppDataSource } from "./../../data-source";
import { User } from "../../entities/user.entity";
import { IUserCreator } from "../../interfaces";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import { Cart } from "../../entities/cart.entity";

const userCreatorService = async ({
  name,
  email,
  password,
  isAdm = false,
}: IUserCreator) => {
  const userRepository = AppDataSource.getRepository(User);
  const cartRepository = AppDataSource.getRepository(Cart);
  const users = await userRepository.find();
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(409, "Email Already Exists");
  }

  const cart = new Cart();
  cart.subtotal = 0;

  cartRepository.create(cart);
  await cartRepository.save(cart);

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.isAdm = isAdm;
  user.cart = cart;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreatorService;
