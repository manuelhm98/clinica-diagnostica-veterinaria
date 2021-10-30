import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewBreed = async (data) => {
  const response = await fetch(`${API_HOST}/breeds`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllBreeds = async (page, type) => {
  const response = await fetch(
    `${API_HOST}/breeds?page=${page}&type=${type}&limit=${2}`,
    { headers: { token: getToken() } }
  );
  return response.json();
};

export const putBreed = async (id, data) => {
  const response = await fetch(`${API_HOST}/breeds/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const listBreeds = async () => {
  const response = await fetch(`${API_HOST}/breeds/list`, {
    headers: { token: getToken() },
  });
  return response.json();
};
