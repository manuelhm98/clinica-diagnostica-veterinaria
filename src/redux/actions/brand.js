import { getAllBrands } from "../../services/brand";
import { types } from "../types/brand-type";

export const addBrand = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readBrands());
  };
};

export function add(data) {
  return {
    type: types.addBrand,
    payload: data,
  };
}

export const readBrands = () => {
  return (dispatch) => {
    getAllBrands().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.brands));
    });
  };
};

export function read(data) {
  return {
    type: types.readBrands,
    payload: data,
  };
}
