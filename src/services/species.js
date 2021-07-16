import { API_HOST } from "../utils/constants";

export const addNewSpecie = async (data) => {
  const response = await fetch(`${API_HOST}/species`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllSpecies = async () => {
  const response = await fetch(`${API_HOST}/species`);
  return response.json();
};

export const putSpecie = async (data) => {
  const response = await fetch(`${API_HOST}/species`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};
