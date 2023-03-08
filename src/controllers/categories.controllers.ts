import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategories.service";
import listCategoriesService from "../services/categories/listCategories.service";

const createCategoryController = async (req: Request, resp: Response): Promise<Response> => {

	const newCategory = await createCategoryService(req.body);

	return resp.status(201).json(newCategory);
};

const listCategoriesController = async (req: Request, resp: Response): Promise<Response> => {

	const allCategories = await listCategoriesService();

	return resp.status(200).json(allCategories);
};

const listCategoriesWithRealEstateController = async (req: Request, resp: Response): Promise<Response> => {
	return resp.status(200).json();
};

export {
	createCategoryController,
	listCategoriesController,
	listCategoriesWithRealEstateController
};