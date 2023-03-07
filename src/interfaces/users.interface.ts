import { z } from "zod";
import { allUsersSchema, createUserSchema, returnCreateUserSchema } from "../schemas/users.schema";

type iCreateUser = z.infer<typeof createUserSchema>
type iReturnCreateUser = z.infer<typeof returnCreateUserSchema>
type iAllUsers = z.infer<typeof allUsersSchema>

export {
	iCreateUser,
	iReturnCreateUser,
	iAllUsers
};