import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewSex = async (data) => {
  const response = await fetch(`${API_HOST}/sexes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllSexes = async () => {
  const response = await fetch(`${API_HOST}/sexes`, {
    headers: { token: getToken() },
  });
  return response.json();
};
