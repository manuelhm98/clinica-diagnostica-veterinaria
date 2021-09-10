import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewPatient = async (data) => {
  const response = await fetch(`${API_HOST}/patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json", token: getToken() },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getAllPatients = async (page, name, customer, limit) => {
  const response = await fetch(
    `${API_HOST}/patients?page=${page}&names=${name}&nameCustomer=${customer}&limit=${limit}`,
    {
      headers: {
        token: getToken(),
      },
    }
  );
  return response.json();
};

export const uploadPetPhoto = async (id, file) => {
  const formData = new FormData();
  formData.append("foto", file);
  const response = await fetch(`${API_HOST}/patients/image/${id}`, {
    method: "POST",
    headers: { token: getToken() },
    body: formData,
  });
  return response.json();
};

export const getPatientById = async (id) => {
  const response = await fetch(`${API_HOST}/patients/${id}`, {
    headers: { token: getToken() },
  });
  return response.json();
};

export const showImage = (name) => {
  return `${API_HOST}/patients/view-image?name=${name}`;
};

export const putPatient = async (id, data) => {
  const response = await fetch(`${API_HOST}/patients/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
