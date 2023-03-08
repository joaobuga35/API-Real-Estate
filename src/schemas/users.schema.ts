import { z } from "zod";

const createUserSchema = z.object({
	name: z.string().min(3).max(45),
	email: z.string().email().max(45),
	password: z.string().min(4).max(120),
	admin: z.boolean().optional().default(false)
});

const returnCreateUserSchema = createUserSchema.extend({
	id: z.number(),
	createdAt: z.string(),
	updatedAt: z.string(),
	deletedAt: z.string().nullable()
}).omit({password: true});

const updateUserSchema = createUserSchema.partial().omit({admin: true});

const allUsersSchema = z.array(returnCreateUserSchema);

export {
	createUserSchema,
	returnCreateUserSchema,
	allUsersSchema, 
	updateUserSchema
};