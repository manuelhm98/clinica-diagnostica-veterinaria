import { API_HOST } from "../utils/constants";

export const addNewSpecially = async (data) => {
  const response = await fetch(`${API_HOST}/speciality`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllSpecialties = async () => {
  const response = await fetch(`${API_HOST}/speciality`);
  return response.json();
};
