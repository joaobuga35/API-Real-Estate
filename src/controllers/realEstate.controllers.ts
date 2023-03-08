import { Request, Response } from "express";
import createRealEstateService from "../services/realEstate/createRealEstate.service";

const createRealEstateController = async (req: Request, resp: Response): Promise<Response> => {

	const newRealEstate = await createRealEstateService(req.body);

	return resp.status(201).json(newRealEstate);
};

export {
	createRealEstateController
};