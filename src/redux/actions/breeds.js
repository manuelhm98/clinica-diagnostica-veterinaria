import { getAllBreeds, listBreeds } from "../../services/breeds";
import { types } from "../types";

export const addBreed = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readBreeds());
  };
};

export function add(data) {
  return {
    type: types.breedAdd,
    payload: data,
  };
}

export const readBreeds = (page = 1, type = "") => {
  return (dispatch) => {
    if (type !== "") {
      page = 1;
    }
    getAllBreeds(page, type).then((res) => {
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
    type: types.breedRead,
    payload: data,
  };
}

export const listBreed = () => {
  return (dispatch) => {
    listBreeds().then((res) => {
      if (res.msg) {
        dispatch(list({}));
        return;
      }
      dispatch(list(res));
    });
  };
};

export function list(data) {
  return {
    type: types.breedList,
    payload: data,
  };
}
