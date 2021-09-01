import { API_HOST } from "../utils/constants";

export const addNewCustomer = async (data) => {
  const response = await fetch(`${API_HOST}/customers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllCustomers = async () => {
  const response = await fetch(`${API_HOST}/customers`);
  return response.json();
};

export const searchCustomer = async (name, last, page) => {
  const response = await fetch(
    `${API_HOST}/customers/search?name=${name}&last=${last}&page=${page}&limit=${10}`
  );
  return response.json();
};

export const putCustomer = async (id, data) => {
  const response = await fetch(`${API_HOST}/customers/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};
