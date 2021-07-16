import { getAllSpecies } from "../../services/species";
import { types } from "../types";

export const addSpecie = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readSpecies())
  };
};

export function add(data) {
  return {
    type: types.specieAdd,
    payload: data,
  };
}

export const readSpecies = () => {
  return (dispatch) => {
    getAllSpecies().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.specie));
    });
  };
};

export function read(data) {
  return {
    type: types.specieRead,
    payload: data,
  };
}
