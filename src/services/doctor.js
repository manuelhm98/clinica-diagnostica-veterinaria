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

export const getDoctorID = async (id) => {
  const response = await fetch(`${API_HOST}/doctors/${id}`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const getPaginatedDoctors = async (page, search,take=5) => {
  const response = await fetch(
    `${API_HOST}/doctors/list?page=${page}&names=${search}&take=${take}`,
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
