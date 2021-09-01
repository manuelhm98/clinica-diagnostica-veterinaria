import { getAllPatients, getPatientById } from "../../services/patients";
import { types } from "../types";

export const addPatient = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readPatients(1,"","",5));
  };
};

export function add(data) {
  return {
    type: types.patientAdd,
    payload: data,
  };
}

export const readPatients = (page, name, custom,limit) => {
  return (dispatch) => {
    if (name !== "" || custom !== "") {
      page = 1;
    }
    getAllPatients(page, name, custom,limit).then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res));
    });
  };
};

export function read(data) {
  return {
    type: types.patientRead,
    payload: data,
  };
}
export const readPatientsById = (id) => {
  return (dispatch) => {
    getPatientById(id).then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(readById(res));
    });
  };
};

export function readById(data) {
  return {
    type: types.patientReadById,
    payload: data,
  };
}
