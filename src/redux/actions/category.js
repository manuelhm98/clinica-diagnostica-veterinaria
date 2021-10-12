import { getAllCategories } from "../../services/category";
import { types } from "../types/category-types";

export const addCategory = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readCategories());
  };
};

export function add(data) {
  return {
    type: types.addCategory,
    payload: data,
  };
}

export const readCategories = () => {
  return (dispatch) => {
    getAllCategories().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.category));
    });
  };
};

export function read(data) {
  return {
    type: types.readCategories,
    payload: data,
  };
}
