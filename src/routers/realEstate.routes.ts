import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate.controllers";
import ensureADMisValid from "../middlewares/ensureADMisValid.middleware";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import ensureBodyIsValidMiddleware from "../middlewares/ensureValidatedBody.middleware";
import { createRealEstateSchema, realEstateResponseSchema } from "../schemas/realEstate.schema";

const realEstateRoutes: Router = Router();

realEstateRoutes.post("",ensureTokenIsValid,ensureADMisValid,ensureBodyIsValidMiddleware(createRealEstateSchema),createRealEstateController);

export default realEstateRoutes;