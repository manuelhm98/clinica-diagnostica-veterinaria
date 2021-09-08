import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewDewormingType = async (data) => {
  const response = await fetch(`${API_HOST}/dewormingType`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllDewormingTypes = async () => {
  const response = await fetch(`${API_HOST}/dewormingType`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const editDewormingType = async (data, id) => {
  const response = await fetch(`${API_HOST}/dewormingType/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
