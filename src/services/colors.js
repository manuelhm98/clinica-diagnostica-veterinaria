import { API_HOST } from "../utils/constants";

export const addNewColor = async (data) => {
  const response = await fetch(`${API_HOST}/colors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllColors = async () => {
  const response = await fetch(`${API_HOST}/colors`);
  return response.json();
};
