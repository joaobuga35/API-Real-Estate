import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategory, iCategoryResponse } from "../../interfaces/categories.interface";

const createCategoryService = async (categoryData: iCategory): Promise<iCategoryResponse> => {

	const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

	const newCategory = categoryRepo.create(categoryData);

	await categoryRepo.save(newCategory);

	return newCategory;
};

export default createCategoryService;