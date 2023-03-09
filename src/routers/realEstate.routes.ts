import { Router } from "express";
import { createRealEstateController, readRealEstateController } from "../controllers/realEstate.controllers";
import ensureADMisValid from "../middlewares/ensureADMisValid.middleware";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import ensureBodyIsValidMiddleware from "../middlewares/ensureValidatedBody.middleware";
import { createRealEstateSchema} from "../schemas/realEstate.schema";

const realEstateRoutes: Router = Router();

realEstateRoutes.post("",ensureTokenIsValid,ensureADMisValid,ensureBodyIsValidMiddleware(createRealEstateSchema),createRealEstateController);
realEstateRoutes.get("",readRealEstateController);

export default realEstateRoutes;