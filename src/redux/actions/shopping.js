import { getAllShopping } from "../../services/shopping-history";
import { types } from "../types";

export const addShopping = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readShoppings(1));
  };
};

export function add(data) {
  return {
    type: types.shoppingAdd,
    payload: data,
  };
}

export const readShoppings = (page = 1) => {
  return (dispatch) => {
    getAllShopping(page).then((res) => {
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
    type: types.shoppingRead,
    payload: data,
  };
}
