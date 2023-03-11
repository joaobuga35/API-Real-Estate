import { z } from "zod";
import { categoryResponseSchema } from "./categories.schema";
import { returnAddressSchema } from "./realEstate.schema";
import { userCompleteSchema } from "./users.schema";

const createScheduleSchema = z.object({
	date: z.string(),
	hour: z.string(),
	realEstateId: z.number()
});

const createResponseScheduleSchema = createScheduleSchema.extend({
	id: z.number(),
	userId: z.number()
});

const readScheduleSchema = z.object({
	id: z.number(),
	value: z.number().gt(0).or(z.string()),
	size: z.number().gt(0),
	sold: z.boolean().default(false),
	createdAt: z.string(),
	updatedAt: z.string(),
	address: returnAddressSchema,
	category: categoryResponseSchema,
	schedule: z.array(z.object({
		id: z.number(),
		date:z.string(),
		hour: z.string(),
		user: userCompleteSchema
	}))
});

export {
	createScheduleSchema,
	createResponseScheduleSchema,
	readScheduleSchema
};