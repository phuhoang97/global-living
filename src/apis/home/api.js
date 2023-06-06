import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/homepage`;

export async function getAllDataHomePage() {
	const response = await axios.get(BASE_URL);

	return response?.data || [];
}

export async function getDetailDataHomePage(dataHomePageId) {
	const response = await axios.get(`${BASE_URL}/${dataHomePageId}`);

	return response?.data || {};
}

export async function postDataHomePage(dataHomePage) {
	const response = await axios.post(BASE_URL, dataHomePage);

	return response?.data || {};
}

export async function updateDataHomePage(id, dataHomePage) {
	const response = await axios.put(`${BASE_URL}/${id}`, dataHomePage);

	return response?.data || {};
}

export async function deleteDataHomePage(dataHomePageId) {
	const response = await axios.delete(`${BASE_URL}/${dataHomePageId}`);

	return response?.data || {};
}
