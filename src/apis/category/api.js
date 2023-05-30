import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/category`;

export async function getAllCategorys() {
	const response = await axios.get(BASE_URL);

	return response?.data || [];
}

export async function getDetailCategory(id) {
	const response = await axios.get(`${BASE_URL}/${id}`);

	return response?.data || {};
}

export async function postCategory(category) {
	const response = await axios.post(BASE_URL, category);

	return response?.data || {};
}

export async function updateCategory(id, category) {
	const response = await axios.put(`${BASE_URL}/${id}`, category);

	return response?.data || {};
}

export async function deleteCategory(categoryId) {
	const response = await axios.delete(`${BASE_URL}/${categoryId}`);

	return response?.data || {};
}
