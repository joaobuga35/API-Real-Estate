import { Request } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iReturnCreateUser, iUpdateUsersPartial } from "../../interfaces/users.interface";
import { returnCreateUserSchema } from "../../schemas/users.schema";

const updateUserService = async (userData: iUpdateUsersPartial, idUser: number, req: Request): Promise<iReturnCreateUser> => {

	const userRepo: Repository<User> = AppDataSource.getRepository(User);

	const oldUserData: User | null = await userRepo.findOneBy({
		id: idUser
	});

	const newUser = userRepo.create({
		...oldUserData,
		...userData
	});

	await userRepo.save(newUser);

	const updatedUser = returnCreateUserSchema.parse(newUser);

	return updatedUser;
};

export default updateUserService;