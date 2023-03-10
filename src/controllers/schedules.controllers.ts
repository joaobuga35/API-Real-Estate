import { Request, Response } from "express";
import createScheduleService from "../services/schedule/createSchedule.service";

const createScheduleController = async (req: Request, resp: Response): Promise<Response> => {
	const responseSchedule = await createScheduleService(req.body, req);
    
	return resp.status(201).json(responseSchedule);
};

export {
	createScheduleController
};