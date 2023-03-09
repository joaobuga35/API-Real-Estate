import {z} from "zod";
import { categoryResponseSchema, categorySchema, listAllCategorySchema, listCategoriesRealEstateSchema } from "../schemas/categories.schema";

type iCategory = z.infer<typeof categorySchema>
type iCategoryResponse = z.infer<typeof categoryResponseSchema>
type iAllCategories = z.infer<typeof listAllCategorySchema>
type iCategoriesRealEstate = z.infer<typeof listCategoriesRealEstateSchema>

export { 
	iCategory,
	iCategoryResponse,
	iAllCategories,
	iCategoriesRealEstate
};