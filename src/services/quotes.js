import { API_HOST } from "../utils/constants";

export const addNewQuote = async (data) => {
  const response = await fetch(`${API_HOST}/quotes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllQuotes = async (page,patient) => {
  const response = await fetch(`${API_HOST}/quotes/list?page=${page}&namePatients=${patient}&limit=${10}`);
  return response.json();
};
