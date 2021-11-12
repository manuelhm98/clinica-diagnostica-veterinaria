import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addHospitalService = async (data) => {
  const response = await fetch(`${API_HOST}/hospitalService`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllHospitalServices = async (page) => {
  const response = await fetch(`${API_HOST}/hospitalService?page=${page}`, {
    headers: {
      token: getToken(),
    },
  });
  return response.json();
};

export const putHospitalServices = async (data, id) => {
  const response = await fetch(`${API_HOST}/hospitalService/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const addNewOrderService = async (data) => {
  const response = await fetch(`${API_HOST}/ordenService`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllOrderService = async (page) => {
  const response = await fetch(`${API_HOST}/ordenService?page=${page}`, {
    headers: {
      token: getToken(),
    },
  });
  return response.json();
};

export const getOrderServiceDetails = async (id) => {
  const response = await fetch(`${API_HOST}/ordenServiceDetail/orden/${id}`, {
    headers: {
      token: getToken(),
    },
  });
  return response.json();
};
