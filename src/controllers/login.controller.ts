import { Request, Response } from "express";
import { iLogin } from "../interfaces/login.interface";
import loginService from "../services/login/createLogin.service";

const loginController = async (req: Request, resp: Response): Promise<Response> => {
	const loginData: iLogin = req.body;
    
	const token = await loginService(loginData);

	return resp.json({
		token: token
	});
};

export default loginController;