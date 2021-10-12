import { API_HOST } from "../utils/constants";
import { getToken } from "./token";

export const addNewProduct = async (data) => {
  const response = await fetch(`${API_HOST}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response;
};
export const putBrand = async (data, id) => {
  const response = await fetch(`${API_HOST}/brands/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const getAllProducts = async (
  page,
  name = "",
  category = "",
  species = "",
  vendors = ""
) => {
  const response = await fetch(
    `${API_HOST}/products/list?page=${page}&name=${name}&category=${category}&species=${species}&vendors=${vendors}`,
    {
      headers: { token: getToken() },
    }
  );
  return response.json();
};
