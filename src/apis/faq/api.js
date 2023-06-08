import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL_QUESTION = `${BASE_ENPOINT}/faqquestion`;
const BASE_URL_CATEGORY = `${BASE_ENPOINT}/faqcategory`;

export async function getAllFaqQuestions() {
	const response = await axios.get(BASE_URL_QUESTION);

	return response?.data || [];
}

export async function getDetailFaqQuestion(id) {
	const response = await axios.get(`${BASE_URL_QUESTION}/${id}`);

	return response?.data || {};
}

export async function postFaqQuestion(faqQuestion) {
	const response = await axios.post(BASE_URL_QUESTION, faqQuestion);

	return response?.data || {};
}

export async function updateFaqQuestion(faqQuestionId, faqQuestion) {
	const response = await axios.put(
		`${BASE_URL_QUESTION}/${faqQuestionId}`,
		faqQuestion
	);

	return response?.data || {};
}

export async function deleteFaqQuestion(faqQuestionsId) {
	const response = await axios.delete(
		`${BASE_URL_QUESTION}/${faqQuestionsId}`
	);

	return response?.data || {};
}

export async function getAllFaqCategories() {
	const response = await axios.get(BASE_URL_CATEGORY);

	return response?.data || [];
}

export async function getDetailFaqCategory(id) {
	const response = await axios.get(`${BASE_URL_CATEGORY}/${id}`);

	return response?.data || {};
}

export async function postFaqCategory(faqCategory) {
	const response = await axios.post(BASE_URL_CATEGORY, faqCategory);

	return response?.data || {};
}

export async function updateFaqCategory(categoryId, faqCategory) {
	const response = await axios.put(
		`${BASE_URL_CATEGORY}/${categoryId}`,
		faqCategory
	);

	return response?.data || {};
}

export async function deleteFaqCategory(faqCategoryId) {
	const response = await axios.delete(
		`${BASE_URL_CATEGORY}/${faqCategoryId}`
	);

	return response?.data || {};
}
