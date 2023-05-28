import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/users`;

export async function getAllUsers() {
	const response = await axios.get(BASE_URL);

	return response?.data || [];
}

export async function getDetailUsers(id) {
	const response = await axios.get(`${BASE_URL}/${id}`);

	return response?.data || {};
}

export async function postUser(user) {
	const response = await axios.post(BASE_URL, user);

	return response?.data || {};
}

export async function deleteUser(userId) {
	const response = await axios.delete(`${BASE_URL}/${userId}`);

	return response?.data || {};
}
