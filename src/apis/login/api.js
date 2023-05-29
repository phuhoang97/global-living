import axios from "axios";
import jwtDecode from "jwt-decode";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/users/login`;

export async function login(userInfo) {
	const response = await axios.post(BASE_URL, userInfo);

	return response?.data || {};
}

export async function getMe() {
	const token = localStorage.getItem("token");

	const decode = await jwtDecode(token);

	if (token) {
		return decode;
	} else {
		return {
			id: 1,
			email: "",
			role: 0,
			iat: 1,
		};
	}
}
