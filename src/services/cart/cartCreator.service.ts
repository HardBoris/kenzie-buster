import { AppDataSource } from "../../data-source";
import { ICartCreator } from "../../interfaces/user";
import { Cart } from "../../entities/Cart";

const cartCreatorService = async ({ paid = false, total }: ICartCreator) => {
  const cartRepository = AppDataSource.getRepository(Cart);

  const cart = new Cart();
  cart.paid = paid;
  cart.total = total;

  cartRepository.create(cart);
  await cartRepository.save(cart);

  return cart;
};

export default cartCreatorService;
