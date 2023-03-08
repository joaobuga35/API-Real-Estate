import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iCreateRealEstate, iResponseRealEstate } from "../../interfaces/realEstate.interface";
import { realEstateResponseSchema } from "../../schemas/realEstate.schema";

const createRealEstateService = async (realEstateData: iCreateRealEstate): Promise<iResponseRealEstate> => {
	const addressRepo : Repository<Address> = AppDataSource.getRepository(Address);
	const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

	const findAddress = await addressRepo.findOne({
		where: {
			street: realEstateData.address.street,
			zipCode: realEstateData.address.zipCode,
			number: realEstateData.address.number ? realEstateData.address.number : ""
		}
	});

	if (findAddress) {
		console.log(realEstateData);
		throw new AppError("Address already exists",409);
	}

	const newAddress = addressRepo.create(realEstateData.address);
	const newRealEstate = realEstateRepo.create(realEstateData);

	await addressRepo.save(newAddress);
	await realEstateRepo.save(newRealEstate);

	return realEstateResponseSchema.parse(newRealEstate);
};

export default createRealEstateService;