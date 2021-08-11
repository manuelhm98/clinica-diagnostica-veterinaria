import { getAllServiceType } from "../../services/service-type";
import { types } from "../types";

export const addServiceType = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readServiceType());
  };
};

export function add(data) {
  return {
    type: types.serviceTypeAdd,
    payload: data,
  };
}

export const readServiceType = () => {
  return (dispatch) => {
    getAllServiceType().then((res) => {
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
    type: types.serviceTypeRead,
    payload: data,
  };
}
