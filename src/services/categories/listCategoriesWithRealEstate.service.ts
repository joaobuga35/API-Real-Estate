import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { iCategoriesRealEstate } from "../../interfaces/categories.interface";

const listCategoriesWithRealEstateService = async (idCategorie: number):Promise<any> => {
	const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

	const findCategory = await categoryRepo.findOneBy({
		id: idCategorie
	});
	
	if (!findCategory) {
		throw new AppError("Category not found",404);
	}

	const findCategoryWithRealEstate = categoryRepo.findOne({
		where: {
			id: idCategorie
		},
		relations:{
			realEstate: true
		}
	});

	return findCategoryWithRealEstate;
};

export default listCategoriesWithRealEstateService;