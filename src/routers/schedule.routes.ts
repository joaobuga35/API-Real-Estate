import { Router } from "express";
import { createScheduleController } from "../controllers/schedules.controllers";
import ensureADMisValid from "../middlewares/ensureADMisValid.middleware";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import ensureBodyIsValidMiddleware from "../middlewares/ensureValidatedBody.middleware";
import { createScheduleSchema } from "../schemas/schedule.schema";

const scheduleRoutes: Router = Router();

scheduleRoutes.post("",ensureTokenIsValid,ensureBodyIsValidMiddleware(createScheduleSchema),createScheduleController);

export default scheduleRoutes;