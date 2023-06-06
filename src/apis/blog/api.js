import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/news`;

export async function getAllBlogs() {
	const response = await axios.get(BASE_URL);

	return response?.data || [];
}

export async function getDetailBlog(id) {
	const response = await axios.get(`${BASE_URL}/${id}`);

	return response?.data || {};
}

export async function postBlog(blog) {
	const response = await axios.post(BASE_URL, blog);

	return response?.data || {};
}

export async function updateBlog(id, blog) {
	const response = await axios.put(`${BASE_URL}/${id}`, blog);

	return response?.data || {};
}

export async function deleteBlog(blogId) {
	const response = await axios.delete(`${BASE_URL}/${blogId}`);

	return response?.data || {};
}
