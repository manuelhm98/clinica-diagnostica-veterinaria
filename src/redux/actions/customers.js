import { getAllCustomers } from "../../services/customers";
import { types } from "../types";

export const addCustomer = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readCustomers());
  };
};

export function add(data) {
  return {
    type: types.customerAdd,
    payload: data,
  };
}

export const readCustomers = () => {
  return (dispatch) => {
    getAllCustomers().then((res) => {
      if (res.msg) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res.customers));
    });
  };
};

export function read(data) {
  return {
    type: types.customerRead,
    payload: data,
  };
}
