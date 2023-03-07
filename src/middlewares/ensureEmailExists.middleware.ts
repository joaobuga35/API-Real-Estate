import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureEmailExists = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {

	const userRepo: Repository<User> = AppDataSource.getRepository(User);

	const findUser = await userRepo.findOne({
		where: {
			email: req.body.email
		}
	});

	if (findUser) {
		throw new AppError("Email already exists", 409);
	}
	return next();
};

export default ensureEmailExists;