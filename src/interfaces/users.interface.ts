import { DeepPartial } from "typeorm";
import { z } from "zod";
import { allUsersSchema, createUserSchema, returnCreateUserSchema, updateUserSchema } from "../schemas/users.schema";

type iCreateUser = z.infer<typeof createUserSchema>
type iReturnCreateUser = z.infer<typeof returnCreateUserSchema>
type iAllUsers = z.infer<typeof allUsersSchema>
type iUpdateUsersPartial = DeepPartial<typeof updateUserSchema>

export {
	iCreateUser,
	iReturnCreateUser,
	iAllUsers,
	iUpdateUsersPartial
};