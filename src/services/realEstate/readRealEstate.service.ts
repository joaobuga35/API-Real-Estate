import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iReadRealEstate } from "../../interfaces/realEstate.interface";

const realRealEstateService = async (): Promise<iReadRealEstate> => {

	const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

	const findRealEstates: Array<RealEstate> = await realEstateRepo.find({
		relations: {
			address: true
		}
	});

	return findRealEstates;
};

export default realRealEstateService;