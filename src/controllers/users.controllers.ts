import { Request, Response } from "express";
import createUserService from "../services/Users/createUser.service";
import readUsersService from "../services/Users/readUsers.service";

const createUserController = async (req: Request, resp: Response): Promise<Response> => {

	const newUser = await createUserService(req.body);

	return resp.status(201).json(newUser);
};

const readUsersController = async (req: Request, resp: Response): Promise<Response> => {
	const allUsers = await readUsersService();
	return resp.status(200).json(allUsers);
};

export {
	createUserController,
	readUsersController
};