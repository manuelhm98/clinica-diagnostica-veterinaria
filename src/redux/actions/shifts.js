import { getAllShifts } from "../../services/shifts";
import { types } from "../types";

export const addShift = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readShifts());
  };
};

export function add(data) {
  return {
    type: types.shiftAdd,
    payload: data,
  };
}

export const readShifts = () => {
  return (dispatch) => {
    getAllShifts().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.shifts));
    });
  };
};

export function read(data) {
  return {
    type: types.shiftRead,
    payload: data,
  };
}
