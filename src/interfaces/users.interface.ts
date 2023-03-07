import { z } from "zod";
import { createUserSchema, returnCreateUserSchema } from "../schemas/users.schema";

type iCreateUser = z.infer<typeof createUserSchema>
type iReturnCreateUser = z.infer<typeof returnCreateUserSchema>

export {
	iCreateUser,
	iReturnCreateUser
};