import { z } from "zod";

const createUserSchema = z.object({
	name: z.string().min(3).max(45),
	email: z.string().email().max(45),
	password: z.string().min(4).max(120),
	admin: z.boolean().default(false).optional()
});

const returnCreateUserSchema = createUserSchema.extend({
	id: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
	deletedAt: z.date().nullable()
}).omit({password: true});

export {
	createUserSchema,
	returnCreateUserSchema
};