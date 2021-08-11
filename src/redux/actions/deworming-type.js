import { getAllDewormingTypes } from "../../services/deworming-type";
import { types } from "../types/deworming-type";

export const addDewormingType = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readDewormingType());
  };
};

export function add(data) {
  return {
    type: types.addDewormingType,
    payload: data,
  };
}

export const readDewormingType = () => {
  return (dispatch) => {
    getAllDewormingTypes().then((res) => {
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
    type: types.readDewormingType,
    payload: data,
  };
}
