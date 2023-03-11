import { z} from "zod";
import { categoryResponseSchema, categorySchema } from "./categories.schema";

const addressSchema = z.object({
	street: z.string(),
	zipCode: z.string().max(8),
	number: z.string().max(7).nullish(),
	city: z.string(),
	state: z.string().max(2)
});

const returnAddressSchema = z.object({
	id: z.number(),
	street: z.string(),
	zipCode: z.string().max(8),
	number: z.string().max(7).nullish(),
	city: z.string(),
	state: z.string().max(2)
});

const createRealEstateSchema = z.object({
	value: z.number().gt(0).or(z.string()),
	size: z.number().gt(0),
	address: addressSchema,
	categoryId: z.number(),
});

const realEstateResponseSchema = z.object({
	id: z.number(),
	value: z.number().gt(0).or(z.string()),
	size: z.number().gt(0),
	sold: z.boolean().default(false),
	address: returnAddressSchema,
	category: categoryResponseSchema,
	createdAt: z.string(),
	updatedAt: z.string()
});


export {
	createRealEstateSchema,
	realEstateResponseSchema,
	returnAddressSchema
};