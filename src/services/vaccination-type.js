import { API_HOST } from "../utils/constants";

export const addNewVaccinationType = async (data) => {
  const response = await fetch(`${API_HOST}/vaccinationType`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllVaccinationTypes = async () => {
  const response = await fetch(`${API_HOST}/vaccinationType`);
  return response.json();
};
