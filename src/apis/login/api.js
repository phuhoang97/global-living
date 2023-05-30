import axios from "axios";
import jwtDecode from "jwt-decode";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/users/login`;

export async function login(userInfo) {
	const response = await axios.post(BASE_URL, userInfo);

	return response?.data || {};
}

export const getMe = () => {
	try {
		const token = localStorage.getItem("token");
		return jwtDecode(token);
	} catch (e) {
		console.log(e);
	}
};
