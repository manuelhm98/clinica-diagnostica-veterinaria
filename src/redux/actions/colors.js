import { getAllColors } from "../../services/colors";
import { types } from "../types";

export const addColor = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readColors())
  };
};

export function add(data) {
  return {
    type: types.colorAdd,
    payload: data,
  };
}

export const readColors = () => {
  return (dispatch) => {
    getAllColors().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.color));
    });
  };
};

export function read(data) {
  return {
    type: types.colorRead,
    payload: data,
  };
}
