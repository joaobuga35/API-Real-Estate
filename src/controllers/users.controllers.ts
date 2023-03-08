import { Request, Response } from "express";
import createUserService from "../services/Users/createUser.service";
import readUsersService from "../services/Users/readUsers.service";
import updateUserService from "../services/Users/updateUser.service";

const createUserController = async (req: Request, resp: Response): Promise<Response> => {

	const newUser = await createUserService(req.body);

	return resp.status(201).json(newUser);
};

const readUsersController = async (req: Request, resp: Response): Promise<Response> => {

	const allUsers = await readUsersService();

	return resp.status(200).json(allUsers);
};

const updateUsersController = async (req: Request, resp: Response): Promise<Response> => {

	const id = Number(req.params.id);
	
	const newUser = await updateUserService(req.body, id, req);

	return resp.status(200).json(newUser);
};

const deleteUsersController = async (req: Request, resp: Response): Promise<Response> => {
	return resp.status(204).json();
};


export {
	createUserController,
	readUsersController,
	updateUsersController,
	deleteUsersController
};