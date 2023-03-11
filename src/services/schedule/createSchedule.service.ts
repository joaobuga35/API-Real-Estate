/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable prefer-const */
import { Request } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";
import { iCreateSchedule, iMessage } from "../../interfaces/schedule.interface";

const createScheduleService = async (scheduleData: iCreateSchedule, req: Request): Promise<iMessage> => {
	const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule);
	const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
	const scheduleQueryBuilder = scheduleRepo.createQueryBuilder("schedule");
	const idUser = Number(req.user.id);

	const realEstate = await realEstateRepo.findOne({
		where: {
			id: scheduleData.realEstateId
		}
	});

	if (!realEstate) {
		throw new AppError("RealEstate not found",404);
	}

	const ensureDateAndHourAsaSame = await scheduleQueryBuilder.
		select("schedule").
		where("schedule.date = :date", {date: scheduleData.date}).
		andWhere("schedule.hour = :hour", {hour: scheduleData.hour}).
		andWhere("schedule.realEstateId = :realEstateId", {realEstateId: scheduleData.realEstateId}).
	    getOne();
    
	if (ensureDateAndHourAsaSame) {
		throw new AppError("Schedule to this real estate at this date and time already exists",409);
	}

	const ensureScheduleDataAndHourUser = await scheduleQueryBuilder.
		select("schedule").
		where("schedule.date = :date", {date: scheduleData.date}).
		andWhere("schedule.hour = :hour", {hour: scheduleData.hour}).
		andWhere("schedule.user = :user", {user: idUser}).
		getOne();

	if (ensureScheduleDataAndHourUser) {
		throw new AppError("User schedule to this real estate at this date and time already exists",409);
	}

	const data = new Date(scheduleData.date);
	const day = data.getDay();

	if (day === 0 || day === 6) {
		throw new AppError("Invalid date, work days are monday to friday",400);
	}

	const hour = Number(scheduleData.hour.split(":")[0]);

	if (hour <= 7 || hour >= 18) {
		throw new AppError("Invalid hour, available times are 8AM to 18PM");
	}

	let scheduleUpdate = {};

	if (idUser) {
		scheduleUpdate = {
			...scheduleData,
			realEstate: realEstate,
			user: idUser
		};
	}

	const newSchedule =  scheduleRepo.create(scheduleUpdate);

	await scheduleRepo.save(newSchedule);

	const response = {message: "Schedule created"};

	return response;
};

export default createScheduleService;