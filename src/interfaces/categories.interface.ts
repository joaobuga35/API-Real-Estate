import {z} from "zod";
import { categoryResponseSchema, categorySchema, listAllCategorySchema } from "../schemas/categories.schema";

type iCategory = z.infer<typeof categorySchema>
type iCategoryResponse = z.infer<typeof categoryResponseSchema>
type iAllCategories = z.infer<typeof listAllCategorySchema>

export { 
	iCategory,
	iCategoryResponse,
	iAllCategories
};