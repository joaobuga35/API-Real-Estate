import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureIDisValid = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
	const userRepo: Repository<User> = AppDataSource.getRepository(User);

	const findUser = await userRepo.findOneBy({
		id: Number(req.params.id)
	});

	if (!findUser) {
		throw new AppError("User not found",404);
	}
	return next();
};

export default ensureIDisValid;