import {z} from "zod";

const categorySchema = z.object({
	name: z.string().max(45)
});

const categoryResponseSchema = categorySchema.extend({
	id: z.number(),
});

const listAllCategorySchema = z.array(categoryResponseSchema);

const listCategoriesRealEstateSchema = z.object({
	id: z.number(),
	name: z.string(),
	realEstate: z.array(z.object({
		id: z.number(),
		value: z.number().gt(0).or(z.string()),
		size: z.number().gt(0),
		createdAt: z.string(),
		updatedAt: z.string()
	}))
});

export {
	categorySchema,
	categoryResponseSchema,
	listAllCategorySchema,
	listCategoriesRealEstateSchema
};