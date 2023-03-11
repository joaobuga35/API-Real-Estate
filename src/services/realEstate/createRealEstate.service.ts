import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iCreateRealEstate, iResponseRealEstate } from "../../interfaces/realEstate.interface";

const createRealEstateService = async (realEstateData: iCreateRealEstate): Promise<iResponseRealEstate> => {
	const addressRepo : Repository<Address> = AppDataSource.getRepository(Address);
	const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
	const categoryRepo : Repository<Category> = AppDataSource.getRepository(Category);

	const findAddress = await addressRepo.findOne({
		where: {
			street: realEstateData.address.street,
			zipCode: realEstateData.address.zipCode,
			number: realEstateData.address.number ? realEstateData.address.number : ""
		}
	});

	if (findAddress) {
		throw new AppError("Address already exists",409);
	}

	const newCategory = await categoryRepo.findOne({
		where: {
			id: Number(realEstateData.categoryId)
		},
	});

	const newAddress = addressRepo.create(realEstateData.address);
	await addressRepo.save(newAddress);

	const newRealEstate: RealEstate = realEstateRepo.create({
		...realEstateData,
		address: newAddress,
		category: newCategory!
	});

	await realEstateRepo.save(newRealEstate);
	
	return newRealEstate;
};

export default createRealEstateService;