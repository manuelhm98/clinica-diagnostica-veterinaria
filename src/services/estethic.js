import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const getAllEstethicServices = async (page) => {
  const response = await fetch(`${API_HOST}/aestheticService?page=${page}`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const addNewEstethicService = async (data) => {
  const response = await fetch(`${API_HOST}/aestheticService`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const putEstethicService = async (data, id) => {
  const response = await fetch(`${API_HOST}/aestheticService/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const saveEstheticOrder = async (data) => {
  const response = await fetch(`${API_HOST}/ordenAesthetic`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllEstethicServicesOrders = async (page) => {
  const response = await fetch(`${API_HOST}/ordenAesthetic?page=${page}`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const getEstethicDetail = async (id) => {
  const response = await fetch(`${API_HOST}/detailAesthetic/orden/${id}`, {
    headers: { token: getToken() },
  });
  return response.json();
};
