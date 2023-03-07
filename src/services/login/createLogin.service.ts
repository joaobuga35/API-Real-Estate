/* eslint-disable no-mixed-spaces-and-tabs */
import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iLogin } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async (loginData: iLogin): Promise<string> => {

	const userRepo: Repository<User> = AppDataSource.getRepository(User);

	const user: User | null = await userRepo.findOneBy({
		email: loginData.email
	});

	if (!user) {
		throw new AppError("Invalid credentials",401);
	}

	const passwordCompare = await compare(loginData.password,user.password);

	if (!passwordCompare) {
		throw new AppError("Invalid credentials",401);
	}

	const token: string = jwt.sign(
		{
			admin: user.admin
		},
        process.env.SECRET_KEY!,
        {
        	expiresIn: process.env.EXPIRES_IN,
        	subject: String(user.id)
        }
	);

	return token;
};

export default loginService;