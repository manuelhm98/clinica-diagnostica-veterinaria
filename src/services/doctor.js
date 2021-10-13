import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewDoctor = async (data) => {
  const response = await fetch(`${API_HOST}/doctors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllDoctors = async () => {
  const response = await fetch(`${API_HOST}/doctors`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const getPaginatedDoctors = async (page, search) => {
  const response = await fetch(
    `${API_HOST}/doctors/list?page=${page}&names=${search}&limit=${25}`,
    { headers: { token: getToken() } }
  );
  return response.json();
};

export const putDoctor = async (data, id) => {
  const response = await fetch(`${API_HOST}/doctors/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
