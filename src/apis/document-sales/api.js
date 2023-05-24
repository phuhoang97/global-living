import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/documents`;

export async function getAllDocumentSales() {
	const response = await axios.get(BASE_URL);

	return response?.data || [];
}

export async function postDocumentSale(documentSales) {
	const response = await axios.post(BASE_URL, documentSales);

	return response?.data || {};
}
