import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iAllUsers } from "../../interfaces/users.interface";
import { allUsersSchema } from "../../schemas/users.schema";

const readUsersService = async (): Promise<iAllUsers> => {

	const userRepo: Repository<User> = AppDataSource.getRepository(User);

	const findUsers: Array<User> = await userRepo.find();

	const users = allUsersSchema.parse(findUsers);

	return users;
};

export default readUsersService;