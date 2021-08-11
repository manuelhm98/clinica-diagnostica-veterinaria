import { getAllRoles } from "../../services/role";
import { types } from "../types";

export const addRole = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readRoles())
  };
};

export function add(data) {
  return {
    type: types.roleAdd,
    payload: data,
  };
}

export const readRoles = () => {
  return (dispatch) => {
    getAllRoles().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.role));
    });
  };
};

export function read(data) {
  return {
    type: types.roleRead,
    payload: data,
  };
}
