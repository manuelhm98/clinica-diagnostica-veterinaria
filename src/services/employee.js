import { API_HOST } from "../utils/constants";

export const addNewEmployee = async (data) => {
  const response = await fetch(`${API_HOST}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllEmployees = async (page) => {
  const response = await fetch(`${API_HOST}/users/list?page=${page}&limit=${10}`);
  return response.json();
};
