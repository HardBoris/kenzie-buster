import { Router } from "express";
import userCreatorController from "../controllers/users/userCreator.controller";
import userListerController from "../controllers/users/userLister.controller";

const routes = Router();

routes.post("/users", userCreatorController);
routes.get("/users", userListerController);

export default routes;
