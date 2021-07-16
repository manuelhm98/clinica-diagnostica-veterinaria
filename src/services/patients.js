import { API_HOST } from "../utils/constants";

export const addNewPatient = async (data) => {
  const response = await fetch(`${API_HOST}/patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllPatients = async () => {
  const response = await fetch(`${API_HOST}/patients`);
  return response.json();
};
