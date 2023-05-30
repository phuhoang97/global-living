import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/customerinfo`;

export async function getAllContacts() {
	const response = await axios.get(BASE_URL);

	return response?.data || [];
}

export async function getDetailContact(id) {
	const response = await axios.get(`${BASE_URL}/${id}`);

	return response?.data || {};
}

export async function postContact(contact) {
	const response = await axios.post(BASE_URL, contact);

	return response?.data || {};
}

export async function updateContact(id, contact) {
	const response = await axios.put(`${BASE_URL}/${id}`, contact);

	return response?.data || {};
}

export async function deleteContact(contactId) {
	const response = await axios.delete(`${BASE_URL}/${contactId}`);

	return response?.data || {};
}
