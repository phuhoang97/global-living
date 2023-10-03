import axios from "axios";
import { BASE_ENPOINT } from "../constants";

const BASE_URL = `${BASE_ENPOINT}/common-data`;

export async function getAllDataInfo() {
  const response = await axios.get(BASE_URL);

  return response?.data || [];
}

export async function getDetailDataInfo(detailDataId) {
  const response = await axios.get(`${BASE_URL}/${detailDataId}`);

  return response?.data || {};
}

export async function postDataInfo(dataInfo) {
  const response = await axios.post(BASE_URL, dataInfo);

  return response?.data || {};
}

export async function updateDataInfo(id, dataInfo) {
  const response = await axios.put(`${BASE_URL}/${id}`, dataInfo);

  return response?.data || {};
}

export async function deleteDataInfo(dataInfoId) {
  const response = await axios.delete(`${BASE_URL}/${dataInfoId}`);

  return response?.data || {};
}
