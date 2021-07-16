import { API_HOST } from "../utils/constants";

export const addNewPatType = async (data) => {
  const response = await fetch(`${API_HOST}/patiensType`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllPatTypes = async () => {
  const response = await fetch(`${API_HOST}/patiensType`);
  return response.json();
};
