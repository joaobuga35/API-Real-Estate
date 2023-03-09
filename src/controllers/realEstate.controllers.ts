import { Request, Response } from "express";
import createRealEstateService from "../services/realEstate/createRealEstate.service";
import realRealEstateService from "../services/realEstate/readRealEstate.service";

const createRealEstateController = async (req: Request, resp: Response): Promise<Response> => {

	const newRealEstate = await createRealEstateService(req.body);

	return resp.status(201).json(newRealEstate);
};

const readRealEstateController = async (req: Request, resp: Response): Promise<Response> => {

	const allRealEstates = await realRealEstateService();

	return resp.status(200).json(allRealEstates);
};
export {
	createRealEstateController,
	readRealEstateController
};