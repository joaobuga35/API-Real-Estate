import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iAllCategories } from "../../interfaces/categories.interface";
import { allUsersSchema } from "../../schemas/users.schema";

const listCategoriesService = async (): Promise<iAllCategories> => {

	const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

	const listCategories: Array<Category> = await categoryRepo.find();

	return listCategories;
};

export default listCategoriesService;