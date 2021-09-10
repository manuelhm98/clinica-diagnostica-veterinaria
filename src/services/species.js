import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewSpecie = async (data) => {
  const response = await fetch(`${API_HOST}/species`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllSpecies = async (page, type) => {
  const response = await fetch(
    `${API_HOST}/species?page=${page}&type=${type}&limit=${10}`,
    { headers: { token: getToken() } }
  );
  return response.json();
};

export const putSpecie = async (id, data) => {
  const response = await fetch(`${API_HOST}/species/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const speciesList = async () => {
  const response = await fetch(`${API_HOST}/species/list`, {
    headers: { token: getToken() },
  });
  return response.json();
};
