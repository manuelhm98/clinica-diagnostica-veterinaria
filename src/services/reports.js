import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const getProductSales = async (take) => {
  const response = await fetch(`${API_HOST}/finance/product?limit=${take}`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const getEstheticSales = async (take) => {
  const response = await fetch(`${API_HOST}/finance/peluqueria?limit=${take}`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const getServicesSales = async (take) => {
  const response = await fetch(`${API_HOST}/finance/hospital?limit=${take}`, {
    headers: { token: getToken() },
  });
  return response.json();
};
