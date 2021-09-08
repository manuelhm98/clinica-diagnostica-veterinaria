import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewVaccinationDose = async (data) => {
  const response = await fetch(`${API_HOST}/vaccinationDose`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllVaccinationDoses = async () => {
  const response = await fetch(`${API_HOST}/vaccinationDose`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const editVaccinationDose = async (data, id) => {
  const response = await fetch(`${API_HOST}/vaccinationDose/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      headers: { token: getToken() },
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
