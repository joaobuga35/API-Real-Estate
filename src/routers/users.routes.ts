import { Router } from "express";
import { createUserController, readUsersController } from "../controllers/users.controllers";
import ensureEmailExists from "../middlewares/ensureEmailExists.middleware";
import ensureBodyIsValidMiddleware from "../middlewares/ensureValidatedBody.middleware";
import { createUserSchema } from "../schemas/users.schema";

const userRoutes: Router = Router();

userRoutes.post("",ensureBodyIsValidMiddleware(createUserSchema),ensureEmailExists,createUserController);
userRoutes.get("",readUsersController);

export default userRoutes;