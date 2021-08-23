import { API_HOST } from "../utils/constants";

export const addNewVaccinationDose = async (data) => {
  const response = await fetch(`${API_HOST}/vaccinationDose`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllVaccinationDoses = async () => {
  const response = await fetch(`${API_HOST}/vaccinationDose`);
  return response.json();
};

export const editVaccinationDose = async (data,id) => {
  const response = await fetch(`${API_HOST}/vaccinationDose/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};