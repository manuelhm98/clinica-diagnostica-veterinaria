import { getAllSpecies, speciesList } from "../../services/species";
import { types } from "../types";

export const addSpecie = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readSpecies(1,""));
  };
};

export function add(data) {
  return {
    type: types.specieAdd,
    payload: data,
  };
}

export const readSpecies = (page = 1, type = "") => {
  return (dispatch) => {
    getAllSpecies(page, type).then((res) => {
      if (!res.ok) {
        dispatch(read({}));
        return;
      }
      dispatch(read(res));
    });
  };
};

export function read(data) {
  return {
    type: types.specieRead,
    payload: data,
  };
}

export const listSpecies = () => {
  return (dispatch) => {
    speciesList().then((res) => {
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
    type: types.specieList,
    payload: data,
  };
}
