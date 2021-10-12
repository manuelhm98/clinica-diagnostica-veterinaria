import { getAllProducts } from "../../services/product";
import { types } from "../types/product-type";

export const addProduct = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readProducts());
  };
};

export function add(data) {
  return {
    type: types.addProduct,
    payload: data,
  };
}

export const readProducts = (
  page = 1,
  name = "",
  category = "",
  species = "",
  vendors = ""
) => {
  return (dispatch) => {
    if (name !== "" || category !== "" || species !== "" || vendors !== "") {
      page = 1;
    }
    getAllProducts(page, name, category, species, vendors).then((res) => {
      if (!res.ok) {
        dispatch(read({}));
        return;
      }
      dispatch(read(res));
    });
  };
};

export function read(data) {
  return {
    type: types.readProducts,
    payload: data,
  };
}
