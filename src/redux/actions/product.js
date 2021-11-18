import { getAllProducts, getProductById } from "../../services/product";
import { types } from "../types/product-type";

export const addProduct = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readProducts(1, "", "", "", ""));
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
  brands = "",
  limit=8
) => {
  return (dispatch) => {
    getAllProducts(page, name, category, species, brands,limit).then((res) => {
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

export const readProductById = (id) => {
  return (dispatch) => {
    getProductById(id).then((res) => {
      if (res.msg) {
        dispatch(readById({}));
        return;
      }
      dispatch(readById(res));
    });
  };
};

export function readById(data) {
  return {
    type: types.cartReadItem,
    payload: data,
  };
}
