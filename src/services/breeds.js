import { API_HOST } from "../utils/constants";

export const addNewBreed = async (data) => {
  const response = await fetch(`${API_HOST}/breeds`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllBreeds = async () => {
  const response = await fetch(`${API_HOST}/breeds`);
  return response.json();
};
