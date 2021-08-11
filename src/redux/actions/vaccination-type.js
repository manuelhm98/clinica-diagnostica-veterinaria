import { getAllVaccinationTypes } from "../../services/vaccination-type";
import { types } from "../types/vaccination-type";

export const addVaccinationType = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readVaccinationType());
  };
};

export function add(data) {
  return {
    type: types.addVaccinationType,
    payload: data,
  };
}

export const readVaccinationType = () => {
  return (dispatch) => {
    getAllVaccinationTypes().then((res) => {
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
    type: types.readVaccinationType,
    payload: data,
  };
}
