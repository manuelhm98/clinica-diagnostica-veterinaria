import { API_HOST } from "../utils/constants";

export const getAllServiceType = async () => {
  const response = await fetch(`${API_HOST}/clinicalServicesType`);
  return response.json();
};

export const addNewServiceType = async (data) => {
  const response = await fetch(`${API_HOST}/clinicalServicesType`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const putServiceType = async (data,id) => {
    const response = await fetch(`${API_HOST}/clinicalServicesType/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  };