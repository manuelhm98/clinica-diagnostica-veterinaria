import { API_HOST } from "../utils/constants";

export const getAllClinicalServices = async (page, type, patient) => {
  const response = await fetch(
    `${API_HOST}/clinicalServices?page=${page}&namesPatient=${patient}&&typeServices=${type}&limit=${10}`
  );
  return response.json();
};

export const addNewClinicalService = async (data) => {
  const response = await fetch(`${API_HOST}/clinicalServices`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};
