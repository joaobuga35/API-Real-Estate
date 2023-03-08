import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";

const ensureNameExists = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {

	const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

	const findName = await categoryRepo.findOne({
		where: {
			name: req.body.name
		}
	});

	if (findName) {
		throw new AppError("Category already exists",409);
	}

	return next();
};

export default ensureNameExists;