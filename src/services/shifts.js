import { API_HOST } from "../utils/constants";

export const addNewShift = async (data) => {
  const response = await fetch(`${API_HOST}/shifts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllShifts = async () => {
  const response = await fetch(`${API_HOST}/shifts`);
  return response.json();
};
