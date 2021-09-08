import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewPestControlType = async (data) => {
  const response = await fetch(`${API_HOST}/pestControlType`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllPestControlTypes = async () => {
  const response = await fetch(`${API_HOST}/pestControlType`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const editPestControlType = async (data, id) => {
  const response = await fetch(`${API_HOST}/pestControlType/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
