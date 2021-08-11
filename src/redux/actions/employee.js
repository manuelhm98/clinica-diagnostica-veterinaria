import { getAllEmployees } from "../../services/employee";
import { types } from "../types";

export const addEmployee = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readEmployees())
  };
};

export function add(data) {
  return {
    type: types.employeeAdd,
    payload: data,
  };
}

export const readEmployees = () => {
  return (dispatch) => {
    getAllEmployees().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.users));
    });
  };
};

export function read(data) {
  return {
    type: types.employeeRead,
    payload: data,
  };
}
