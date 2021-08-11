import { getAllDoctors } from "../../services/doctor";
import { types } from "../types";

export const addDoctor = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readDoctors());
  };
};

export function add(data) {
  return {
    type: types.doctorAdd,
    payload: data,
  };
}

export const readDoctors = () => {
  return (dispatch) => {
    getAllDoctors().then((res) => {
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
    type: types.doctorRead,
    payload: data,
  };
}
