import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewShopping = async (data) => {
  const response = await fetch(`${API_HOST}/shopping`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllShopping = async (page) => {
  const response = await fetch(`${API_HOST}/shopping?page=${page}&limit=10`, {
    headers: {
      token: getToken(),
    },
  });
  return response.json();
};
