import { API_HOST } from "../utils/constants";

export const addNewDewormingType = async (data) => {
  const response = await fetch(`${API_HOST}/dewormingType`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllDewormingTypes = async () => {
  const response = await fetch(`${API_HOST}/dewormingType`);
  return response.json();
};
