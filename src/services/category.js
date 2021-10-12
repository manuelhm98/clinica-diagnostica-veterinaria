import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewCategory = async (data) => {
  const response = await fetch(`${API_HOST}/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response;
};
export const putCategory = async (data,id) => {
  const response = await fetch(`${API_HOST}/category/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const getAllCategories = async (page, type) => {
  const response = await fetch(`${API_HOST}/category`, {
    headers: { token: getToken() },
  });
  return response.json();
};
