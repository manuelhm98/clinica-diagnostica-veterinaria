import { getAllSexes } from "../../services/sexes";
import { types } from "../types";

export const addSex = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readSexes())
  };
};

export function add(data) {
  return {
    type: types.colorAdd,
    payload: data,
  };
}

export const readSexes = () => {
  return (dispatch) => {
    getAllSexes().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.sex));
    });
  };
};

export function read(data) {
  return {
    type: types.sexesRead,
    payload: data,
  };
}
