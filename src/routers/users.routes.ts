import { Router } from "express";
import { createUserController, deleteUsersController, readUsersController, updateUsersController } from "../controllers/users.controllers";
import ensureADMisValid from "../middlewares/ensureADMisValid.middleware";
import ensureEmailExists from "../middlewares/ensureEmailExists.middleware";
import ensureIDisValid from "../middlewares/ensureIDisValid.middleware";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import ensureADMandIDisValid from "../middlewares/ensureUserADMorIDisValid.middleware";
import ensureBodyIsValidMiddleware from "../middlewares/ensureValidatedBody.middleware";
import { createUserSchema,updateUserSchema } from "../schemas/users.schema";

const userRoutes: Router = Router();

userRoutes.post("",ensureBodyIsValidMiddleware(createUserSchema),ensureEmailExists,createUserController);
userRoutes.get("",ensureTokenIsValid,ensureADMisValid,readUsersController);
userRoutes.patch("/:id",ensureTokenIsValid,ensureIDisValid,ensureBodyIsValidMiddleware(updateUserSchema),ensureADMandIDisValid,ensureEmailExists,updateUsersController);
userRoutes.delete("/:id",ensureTokenIsValid,ensureIDisValid,ensureADMisValid,deleteUsersController);

export default userRoutes;