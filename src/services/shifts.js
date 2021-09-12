import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewShift = async (data) => {
  const response = await fetch(`${API_HOST}/shifts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllShifts = async () => {
  const response = await fetch(`${API_HOST}/shifts`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const putShift = async (data,id) => {
  const response = await fetch(`${API_HOST}/shifts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};