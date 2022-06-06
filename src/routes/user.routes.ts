import { authUser } from "./../middlewares/authUser.middleware";
import { Router } from "express";

const routes = Router();

import userIndividualController from "../controllers/userIndividual.controller";
import userLogerController from "../controllers/userLoger.controller";
import userCreatorController from "../controllers/users/userCreator.controller";
import userListerController from "../controllers/users/userLister.controller";
import userSelfDeletorController from "../controllers/users/userSelfDeletor.controller";
import userPasswordUpdaterController from "../controllers/users/userPasswordUpdater.controller";

routes.post("/users", userCreatorController);
routes.post("/users/login", userLogerController);
routes.get("/users", authUser, userListerController);
routes.get("/users/me", authUser, userIndividualController);
routes.patch(
  "/users/me/updatePassword",
  authUser,
  userPasswordUpdaterController
);
routes.delete("/users/me", authUser, userSelfDeletorController);

export default routes;
