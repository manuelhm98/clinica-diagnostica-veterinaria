import { getAllVaccinationDoses } from "../../services/vaccination-dose";
import { types } from "../types/vaccination-dose";

export const addVaccinationDose = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readVaccinationDose());
  };
};

export function add(data) {
  return {
    type: types.addVaccinationDose,
    payload: data,
  };
}

export const readVaccinationDose = () => {
  return (dispatch) => {
    getAllVaccinationDoses().then((res) => {
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
    type: types.readVaccinationDose,
    payload: data,
  };
}
