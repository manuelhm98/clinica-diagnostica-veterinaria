import { getAllBreeds } from "../../services/breeds";
import { types } from "../types";

export const addBreed = (data) => {
  return (dispatch) => {
    dispatch(add(data));
  };
};

export function add(data) {
  return {
    type: types.breedAdd,
    payload: data,
  };
}

export const readBreeds = (data) => {
  return (dispatch) => {
    getAllBreeds().then((res) => {
      dispatch(read(res));
    });
  };
};

export function read(data) {
  return {
    type: types.breedRead,
    payload: data,
  };
}
