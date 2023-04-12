import axios from "axios";
import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewCustomer = async (data) => {
  const response = await fetch(`${API_HOST}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllCustomers = async () => {
  const response = await fetch(`${API_HOST}/customers`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const searchCustomer = async (name, last,phone, page, limit = 25, state) => {
  const response = await fetch(
    `${API_HOST}/customers/search?name=${name}&last=${last}&phone=${phone}&page=${page}&limit=${limit}&state=${state}`,
    { headers: { token: getToken() } }
  );
  return response.json();
};

export const putCustomer = async (id, data) => {
  const response = await fetch(`${API_HOST}/customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const changeState = async (id, state) => {
  const data = { id, state: !state };
  const response = await fetch(`${API_HOST}/customers/delete`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const validPhone = async (data) => {
  const response = await fetch(`${API_HOST}/customers/valid-cell`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
export const changePassword = async (password,user_id) => {
  const result = await axios.post(API_HOST + "/customers/changePassword/" + user_id, { password }, {
    headers: {
      token: getToken()
    }
  })
  return result.data
}