import { Router } from "express";

const routes = Router();

import userIndividualController from "../controllers/userIndividual.controller";
import userLogerController from "../controllers/userLoger.controller";
import userCreatorController from "../controllers/users/userCreator.controller";
import userListerController from "../controllers/users/userLister.controller";

routes.post("/users", userCreatorController);
routes.post("/users/login", userLogerController);
routes.get("/users", userListerController);
routes.get("/users/me", userIndividualController);

export default routes;
