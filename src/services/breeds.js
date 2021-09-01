import { API_HOST } from "../utils/constants";

export const addNewBreed = async (data) => {
  const response = await fetch(`${API_HOST}/breeds`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllBreeds = async (page, type) => {
  const response = await fetch(
    `${API_HOST}/breeds?page=${page}&type=${type}&limit=${10}`
  );
  return response.json();
};

export const putBreed = async (id, data) => {
  const response = await fetch(`${API_HOST}/breeds/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const listBreeds = async () => {
  const response = await fetch(`${API_HOST}/breeds/list`);
  return response.json();
};
