import { API_HOST } from "../utils/constants";

export const addNewColor = async (data) => {
  const response = await fetch(`${API_HOST}/colors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllColors = async (page, type) => {
  const response = await fetch(`${API_HOST}/colors?page=${page}&type=${type}`);
  return response.json();
};

export const putColor = async (id, data) => {
  const response = await fetch(`${API_HOST}/colors/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const colorList = async () => {
  const response = await fetch(`${API_HOST}/colors/list`);
  return response.json();
};
