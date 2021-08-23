import { API_HOST } from "../utils/constants";

export const addNewQuoteType = async (data) => {
  const response = await fetch(`${API_HOST}/quotesType`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllQuoteTypes = async () => {
  const response = await fetch(`${API_HOST}/quotesType`);
  return response.json();
};
