import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const ensureADMandIDisValid = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
	const idParam = Number(req.params.id);
	const idUser = req.user.id;
	if (idUser !== idParam && req.user.admin === false) {
		throw new AppError("Insufficient permission",403);
	}

	return next();
};

export default ensureADMandIDisValid;