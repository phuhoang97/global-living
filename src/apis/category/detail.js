import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/detailcategory`;
const BASE_URL_BY_CATEGORY = `${BASE_ENPOINT}/category/detail`;

export async function getAllCategoriesDetailByCategoryId(categoryId) {
	const response = await axios.post(BASE_URL_BY_CATEGORY, categoryId);

	return response?.data || [];
}

export async function getDetailCategoryDetail(id) {
	const response = await axios.get(`${BASE_URL}/${id}`);

	return response?.data || {};
}

export async function postCategoryDetail(categoryDetail) {
	const response = await axios.post(BASE_URL, categoryDetail);

	return response?.data || {};
}

export async function updateCategoryDetail(id, categoryDetail) {
	const response = await axios.put(`${BASE_URL}/${id}`, categoryDetail);

	return response?.data || {};
}

export async function deleteCategoryDetail(categoryDetailId) {
	const response = await axios.delete(`${BASE_URL}/${categoryDetailId}`);

	return response?.data || {};
}
