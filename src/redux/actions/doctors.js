import { getPaginatedDoctors } from "../../services/doctor";
import { types } from "../types";

export const addDoctor = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readDoctors(1,""));
  };
};

export function add(data) {
  return {
    type: types.doctorAdd,
    payload: data,
  };
}

export const readDoctors = (page, search,take) => {
  return (dispatch) => {
    getPaginatedDoctors(page, search,take).then((res) => {
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
    type: types.doctorRead,
    payload: data,
  };
}
