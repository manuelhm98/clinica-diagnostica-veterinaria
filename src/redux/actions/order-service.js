import {
  getAllOrderService,
  getOrderServiceDetails,
} from "../../services/hospital-service";
import { types } from "../types/hospital-types";

export const newOrderService = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readOrderServices(1));
  };
};

export function add(data) {
  return {
    type: types.addOrderService,
    payload: data,
  };
}

export const readOrderServices = (page) => {
  return (dispatch) => {
    getAllOrderService(page).then((res) => {
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
    type: types.readOrderServices,
    payload: data,
  };
}

export const readOrderServiceDetails = (id) => {
  return (dispatch) => {
    getOrderServiceDetails(id).then((res) => {
      if (res.msg) {
        dispatch(readDetail({}));
        return;
      }
      dispatch(readDetail(res.ordenServiceDetail));
    });
  };
};

export function readDetail(data) {
  return {
    type: types.readOrderDetail,
    payload: data,
  };
}
