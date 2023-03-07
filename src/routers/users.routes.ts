import { Router } from "express";
import { createUserController, readUsersController } from "../controllers/users.controllers";
import ensureADMisValid from "../middlewares/ensureADMisValid.middleware";
import ensureEmailExists from "../middlewares/ensureEmailExists.middleware";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import ensureBodyIsValidMiddleware from "../middlewares/ensureValidatedBody.middleware";
import { createUserSchema } from "../schemas/users.schema";

const userRoutes: Router = Router();

userRoutes.post("",ensureBodyIsValidMiddleware(createUserSchema),ensureEmailExists,createUserController);
userRoutes.get("",ensureTokenIsValid,ensureADMisValid,readUsersController);

export default userRoutes;