import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewPatType = async (data) => {
  const response = await fetch(`${API_HOST}/patiensType`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllPatTypes = async () => {
  const response = await fetch(`${API_HOST}/patiensType`, {
    headers: { token: getToken() },
  });
  return response.json();
};
