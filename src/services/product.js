import axios from "axios";
import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewProduct = async (data) => {
  const response = await fetch(`${API_HOST}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
export const putProduct = async (data, id) => {
  const response = await fetch(`${API_HOST}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllProducts = async (
  page,
  name = "",
  category = "",
  species = "",
  brands = "",
  limit = 8
) => {
  const response = await fetch(
    `${API_HOST}/products/list?page=${page}&name=${name}&category=${category}&species=${species}&brands=${brands}&limit=${limit}`,
    {
      headers: { token: getToken() },
    }
  );
  return response.json();
};

export const uploadProductPhoto = async (id, file) => {
  const formData = new FormData();
  formData.append("upload", file);
  const response = await fetch(`${API_HOST}/products/image/${id}`, {
    method: "POST",
    headers: { token: getToken() },
    body: formData,
  });
  return response.json();
};

export const showImage = async (name) => {
  const res = axios.get(`${API_HOST}/products/view-image?name=${name}`);
  return res;
};
export const getProductById = async (id) => {
  const response = await fetch(`${API_HOST}/products/${id}`, {
    headers: { token: getToken() },
  });
  return response.json();
};
 
