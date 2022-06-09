import { Express } from "express";
import { userRoutes } from "./user.routes";
import { dvdRoutes } from "./dvd.routes";
import { cartRoutes } from "./cart.routes";
import { buyRoutes } from "./buy.routes";

export const appRoutes = (app: Express) => {
  app.use("/api/users", userRoutes());
  app.use("/products", dvdRoutes());
  app.use("/cart", cartRoutes());
  app.use("/buy", buyRoutes());
};
