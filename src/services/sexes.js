import { API_HOST } from "../utils/constants";

export const addNewSex = async (data) => {
  const response = await fetch(`${API_HOST}/sexes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllSexes = async () => {
  const response = await fetch(`${API_HOST}/sexes`);
  return response.json();
};
