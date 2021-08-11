import { API_HOST } from "../utils/constants";

export const addNewRole = async (data) => {
  const response = await fetch(`${API_HOST}/roles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllRoles = async () => {
  const response = await fetch(`${API_HOST}/roles`);
  return response.json();
};
