import { API_HOST } from "../utils/constants";

export const addNewPestControlType = async (data) => {
  const response = await fetch(`${API_HOST}/pestControlType`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllPestControlTypes = async () => {
  const response = await fetch(`${API_HOST}/pestControlType`);
  return response.json();
};

export const editPestControlType = async (data,id) => {
  const response = await fetch(`${API_HOST}/pestControlType/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};