import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const getAllServiceType = async () => {
  const response = await fetch(`${API_HOST}/clinicalServicesType`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const addNewServiceType = async (data) => {
  const response = await fetch(`${API_HOST}/clinicalServicesType`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const putServiceType = async (data, id) => {
  const response = await fetch(`${API_HOST}/clinicalServicesType/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getPaginServiceTypes = async (page, type) => {
  const response = await fetch(
    `${API_HOST}/clinicalServicesType/list?page=${page}&type=${type}&limit=${25}`,
    { headers: { token: getToken() } }
  );
  return response.json();
};
