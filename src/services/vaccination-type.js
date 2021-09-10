import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewVaccinationType = async (data) => {
  const response = await fetch(`${API_HOST}/vaccinationType`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllVaccinationTypes = async () => {
  const response = await fetch(`${API_HOST}/vaccinationType`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const editVaccinationType = async (data, id) => {
  const response = await fetch(`${API_HOST}/vaccinationType/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
