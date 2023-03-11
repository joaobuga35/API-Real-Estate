import { Request, Response } from "express";
import createScheduleService from "../services/schedule/createSchedule.service";
import { readScheduleService } from "../services/schedule/readSchedule.service";

const createScheduleController = async (req: Request, resp: Response): Promise<Response> => {
	const responseSchedule = await createScheduleService(req.body, req);
    
	return resp.status(201).json(responseSchedule);
};

const readScheduleController = async (req: Request, resp: Response): Promise<Response> => {
	const id = Number(req.params.id);
	
	const scheduleRealEstate = await readScheduleService(id);

	return resp.status(200).json(scheduleRealEstate);
};

export {
	createScheduleController,
	readScheduleController
};