import { API_HOST } from "../utils/constants";

export const addNewSpecie = async (data) => {
  const response = await fetch(`${API_HOST}/species`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllSpecies = async (page, type) => {
  const response = await fetch(`${API_HOST}/species?page=${page}&type=${type}&limit=${10}`);
  return response.json();
};

export const putSpecie = async (id, data) => {
  const response = await fetch(`${API_HOST}/species/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const speciesList = async () => {
  const response = await fetch(`${API_HOST}/species/list`);
  return response.json();
};
