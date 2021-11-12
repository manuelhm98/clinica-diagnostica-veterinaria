import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const getResultsByQuote = async (id) => {
  const response = await fetch(`${API_HOST}/results/${id}`, {
    headers: { token: getToken() },
  });
  return response.json();
};