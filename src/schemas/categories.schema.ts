import {z} from "zod";

const categorySchema = z.object({
	name: z.string().max(45)
});

const categoryResponseSchema = categorySchema.extend({
	id: z.number(),
});

const listAllCategorySchema = z.array(categoryResponseSchema);

export {
	categorySchema,
	categoryResponseSchema,
	listAllCategorySchema
};