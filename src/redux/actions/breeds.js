import { getAllBreeds } from "../../services/breeds";
import { types } from "../types";

export const addBreed = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readBreeds())
  };
};

export function add(data) {
  return {
    type: types.breedAdd,
    payload: data,
  };
}

export const readBreeds = () => {
  return (dispatch) => {
    getAllBreeds().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.breeds));
    });
  };
};

export function read(data) {
  return {
    type: types.breedRead,
    payload: data,
  };
}
