import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/contacts`;

export async function postContact(contact) {
	const response = await axios.post(BASE_URL, contact);

	return response?.data || {};
}
