import { getAllSpecies } from "../../services/species";
import { types } from "../types";

export const addSpecie = (data) => {
  return (dispatch) => {
    dispatch(add(data));
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
