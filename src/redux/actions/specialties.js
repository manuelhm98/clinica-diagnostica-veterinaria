import { getAllSpecialties } from "../../services/specialties";
import { types } from "../types";

export const addSpecially = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readSpecialties())
  };
};

export function add(data) {
  return {
    type: types.speciallyAdd,
    payload: data,
  };
}

export const readSpecialties = () => {
  return (dispatch) => {
    getAllSpecialties().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.speciality));
    });
  };
};

export function read(data) {
  return {
    type: types.speciallyRead,
    payload: data,
  };
}
