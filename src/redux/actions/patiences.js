import { getAllPatients } from "../../services/patients";
import { types } from "../types";

export const addPatient = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readPatients());
  };
};

export function add(data) {
  return {
    type: types.patientAdd,
    payload: data,
  };
}

export const readPatients = () => {
  return (dispatch) => {
    getAllPatients().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.patients));
    });
  };
};

export function read(data) {
  return {
    type: types.patientRead,
    payload: data,
  };
}
