import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewSpecially = async (data) => {
  const response = await fetch(`${API_HOST}/speciality`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllSpecialties = async () => {
  const response = await fetch(`${API_HOST}/speciality`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const putSpecially = async (data, id) => {
  const response = await fetch(`${API_HOST}/speciality/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
