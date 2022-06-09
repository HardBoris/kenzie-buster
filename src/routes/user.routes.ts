import { authUser } from "./../middlewares/authUser.middleware";
import { Router } from "express";

import userIndividualController from "../controllers/userIndividual.controller";
import userLogerController from "../controllers/userLoger.controller";
import userCreatorController from "../controllers/users/userCreator.controller";
import userListerController from "../controllers/users/userLister.controller";
import userSelfDeletorController from "../controllers/users/userSelfDeletor.controller";
import userPasswordUpdaterController from "../controllers/users/userPasswordUpdater.controller";
import verifyEmail from "../middlewares/verifyEmail.middleware";

const routes = Router();

export const userRoutes = () => {
  // routes.post("/register", userCreatorController);
  routes.post("/register", userCreatorController);
  routes.post("/users/login", userLogerController);
  routes.get("/users", authUser, userListerController);
  routes.get("/users/me", authUser, userIndividualController);
  routes.patch(
    "/users/me/updatePassword",
    authUser,
    userPasswordUpdaterController
  );
  routes.delete("/users/me", authUser, userSelfDeletorController);

  return routes;
};
