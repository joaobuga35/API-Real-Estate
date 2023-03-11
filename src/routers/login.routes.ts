import { Router } from "express";
import loginController from "../controllers/login.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensureValidatedBody.middleware";
import loginSchema from "../schemas/login.schema";

const loginRoutes: Router = Router();

loginRoutes.post("",ensureBodyIsValidMiddleware(loginSchema),loginController);

export default loginRoutes;