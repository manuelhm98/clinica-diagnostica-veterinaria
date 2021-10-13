import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewBrand = async (data) => {
  const response = await fetch(`${API_HOST}/brands`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response;
};
export const putBrand = async (data,id) => {
  const response = await fetch(`${API_HOST}/brands/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const getAllBrands = async (page, type) => {
  const response = await fetch(`${API_HOST}/brands`, {
    headers: { token: getToken() },
  });
  return response.json();
};
