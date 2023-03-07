import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iCreateUser, iReturnCreateUser } from "../../interfaces/users.interface";
import { returnCreateUserSchema } from "../../schemas/users.schema";

const createUserService = async (userData: iCreateUser): Promise<iReturnCreateUser> => {
    
	const userRepo: Repository<User> = AppDataSource.getRepository(User);

	const user = userRepo.create(userData);

	await userRepo.save(user);

	const newUser = returnCreateUserSchema.parse(user);

	return newUser;
};

export default createUserService;
