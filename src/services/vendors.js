import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewVendor = async (data) => {
  const response = await fetch(`${API_HOST}/vendors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllVendors = async (page, name, nameVendors) => {
  const response = await fetch(
    `${API_HOST}/vendors/list?page=${page}&name=${name}&nameVendors=${nameVendors}`,
    {
      headers: { token: getToken() },
    }
  );
  return response.json();
};

export const putVendor = async (data, id) => {
  const response = await fetch(`${API_HOST}/vendors/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getVendors = async () => {
  const response = await fetch(`${API_HOST}/vendors`, {
    headers: { token: getToken() },
  });
  return response.json();
};
