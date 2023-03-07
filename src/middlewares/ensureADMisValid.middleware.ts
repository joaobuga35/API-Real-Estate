import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const ensureADMisValid = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
	const adm: boolean = req.user.role;

	if (adm === false) {
		throw new AppError("Insufficient permission",403);
	}

	return next();
};

export default ensureADMisValid;