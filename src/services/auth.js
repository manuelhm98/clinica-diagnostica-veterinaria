import { API_HOST } from "../utils/constants";

export const login = async (data) => {
  const response = await fetch(`${API_HOST}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
