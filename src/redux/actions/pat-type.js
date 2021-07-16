import { getAllPatTypes } from "../../services/pat-type";
import { types } from "../types";

export const addPatType = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readPatTypes())
  };
};

export function add(data) {
  return {
    type: types.patTypeAdd,
    payload: data,
  };
}

export const readPatTypes = () => {
  return (dispatch) => {
    getAllPatTypes().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.patienType));    
    });
  };
};

export function read(data) {
  return {
    type: types.patTypeRead,
    payload: data,
  };
}
