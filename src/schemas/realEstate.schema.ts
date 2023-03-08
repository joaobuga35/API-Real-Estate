import { z} from "zod";
import { addressSchema, returnAddressSchema } from "./address.schema";
import { categoryResponseSchema, categorySchema } from "./categories.schema";

const createRealEstateSchema = z.object({
	value: z.number().gt(0).or(z.string()),
	size: z.number().gt(0),
	address: addressSchema,
	categoryId: z.number().optional(),
});

const realEstateResponseSchema = createRealEstateSchema.omit({ categoryId: true }).extend({
	id: z.number(),
	sold: z.boolean(),
	createdAt: z.string(),
	updatedAt: z.string(),
	address: returnAddressSchema,
	category: categorySchema.nullish()
});

export {
	createRealEstateSchema,
	realEstateResponseSchema
};