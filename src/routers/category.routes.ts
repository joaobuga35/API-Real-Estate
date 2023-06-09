import { Router } from "express";
import { createCategoryController, listCategoriesController, listCategoriesWithRealEstateController } from "../controllers/categories.controllers";
import ensureADMisValid from "../middlewares/ensureADMisValid.middleware";
import ensureIDisValid from "../middlewares/ensureIDisValid.middleware";
import ensureNameExists from "../middlewares/ensureNameExists.middleware";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import ensureBodyIsValidMiddleware from "../middlewares/ensureValidatedBody.middleware";
import {categorySchema} from "../schemas/categories.schema";

const categoryRoutes: Router = Router();

categoryRoutes.post("",ensureTokenIsValid,ensureADMisValid,ensureBodyIsValidMiddleware(categorySchema),ensureNameExists,createCategoryController);
categoryRoutes.get("",listCategoriesController);
categoryRoutes.get("/:id/realEstate",listCategoriesWithRealEstateController);
export default categoryRoutes;