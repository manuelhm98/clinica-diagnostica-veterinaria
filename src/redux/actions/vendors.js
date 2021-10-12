import { getAllVendors, getVendors } from "../../services/vendors";
import { types } from "../types/vendors-types";

export const addVendor = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readVendors(1, "", ""));
  };
};

export function add(data) {
  return {
    type: types.addVendor,
    payload: data,
  };
}

export const readVendors = (page = 1, name = "", vendor = "") => {
  return (dispatch) => {
    if (name !== "" && vendor !== "") {
      page = 1;
    }
    getAllVendors(page, name, vendor).then((res) => {
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
    type: types.readVendors,
    payload: data,
  };
}

export const listVendors = () => {
  return (dispatch) => {
    getVendors().then((res) => {
      if (res.msg) {
        dispatch(list([]));
        return;
      }
      dispatch(list(res));
    });
  };
};

export function list(data) {
  return {
    type: types.listVendors,
    payload: data,
  };
}
