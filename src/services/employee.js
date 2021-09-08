import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewEmployee = async (data) => {
  const response = await fetch(`${API_HOST}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllEmployees = async (page) => {
  const response = await fetch(
    `${API_HOST}/users/list?page=${page}&limit=${10}`,
    { headers: { token: getToken() } }
  );
  return response.json();
};

export const putEmployee = async (data, id) => {
  const response = await fetch(`${API_HOST}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
