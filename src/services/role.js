import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewRole = async (data) => {
  const response = await fetch(`${API_HOST}/roles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllRoles = async () => {
  const response = await fetch(`${API_HOST}/roles`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const putRole = async (data, id) => {
  const response = await fetch(`${API_HOST}/roles/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
