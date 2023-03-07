import { Request, Response } from "express";
import createUserService from "../services/Users/createUser.service";

const createUserController = async (req: Request, resp: Response): Promise<Response> => {

	const newUser = await createUserService(req.body);

	return resp.status(201).json(newUser);
};

export {
	createUserController
};