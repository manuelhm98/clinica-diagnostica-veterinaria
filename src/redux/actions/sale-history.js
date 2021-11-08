import { getSales, getSalesDetails } from "../../services/sales-history";
import { types } from "../types/sale-history";

export const newSale = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readSales(1));
  };
};

export function add(data) {
  return {
    type: types.addSale,
    payload: data,
  };
}

export const readSales = (page = 1) => {
  return (dispatch) => {
    getSales(page).then((res) => {
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
    type: types.readSales,
    payload: data,
  };
}

export const readSaleDetail = (id) => {
  return (dispatch) => {
    getSalesDetails(id).then((res) => {
      if (!res.sales) {
        dispatch(detail({}));
      }
      dispatch(detail(res.sales));
    });
  };
};

export function detail(data) {
  return {
    type: types.readDetails,
    payload: data,
  };
}
