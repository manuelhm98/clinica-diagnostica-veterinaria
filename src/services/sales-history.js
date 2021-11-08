import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addSale = async (data) => {
  const response = await fetch(`${API_HOST}/sales/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getSales = async (page) => {
  const response = await fetch(`${API_HOST}/sales?page=${page}`, {
    headers: { token: getToken() },
  });
  return response.json()
};
export const getSalesDetails = async (id) => {
    const response = await fetch(`${API_HOST}/saleDetail/sales/${id}`, {
      headers: { token: getToken() },
    });
    return response.json()
  };
