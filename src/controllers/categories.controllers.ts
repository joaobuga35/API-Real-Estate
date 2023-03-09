import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategories.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listCategoriesWithRealEstateService from "../services/categories/listCategoriesWithRealEstate.service";

const createCategoryController = async (req: Request, resp: Response): Promise<Response> => {

	const newCategory = await createCategoryService(req.body);

	return resp.status(201).json(newCategory);
};

const listCategoriesController = async (req: Request, resp: Response): Promise<Response> => {

	const allCategories = await listCategoriesService();

	return resp.status(200).json(allCategories);
};

const listCategoriesWithRealEstateController = async (req: Request, resp: Response): Promise<Response> => {
	const id = Number(req.params.id);

	const allEstatesWithCategory = await listCategoriesWithRealEstateService(id);

	return resp.status(200).json(allEstatesWithCategory);
};

export {
	createCategoryController,
	listCategoriesController,
	listCategoriesWithRealEstateController
};