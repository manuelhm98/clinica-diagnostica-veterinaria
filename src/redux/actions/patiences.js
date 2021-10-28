import { getAllPatients, getPatientById } from "../../services/patients";
import { types } from "../types";

export const addPatient = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readPatients(1, "", "", "", 25, 1));
  };
};

export function add(data) {
  return {
    type: types.patientAdd,
    payload: data,
  };
}

export const readPatients = (
  page = 1,
  name = "",
  custom = "",
  exp = "",
  limit = 25,
  state = 1
) => {
  return (dispatch) => {
    if (name !== "" || custom !== "" || exp !== "") {
      page = 1;
    }
    getAllPatients(page, name, custom, exp, limit, state).then((res) => {
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
