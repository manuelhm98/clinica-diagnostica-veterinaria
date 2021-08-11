import { getAllPestControlTypes } from "../../services/pest-control-type";
import { types } from "../types/pest-control-type";

export const addPestControlType = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readPestControlTypes());
  };
};

export function add(data) {
  return {
    type: types.addPestControlType,
    payload: data,
  };
}

export const readPestControlTypes = () => {
  return (dispatch) => {
    getAllPestControlTypes().then((res) => {
      if (res.msg) {
        dispatch(read({}));
        return;
      }
      dispatch(read(res));
    });
  };
};

export function read(data) {
  return {
    type: types.readPestControlType,
    payload: data,
  };
}
