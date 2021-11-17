import {
  getAllEstethicServices,
  getAllEstethicServicesOrders,
  getEstethicDetail,
} from "../../services/estethic";
import { types } from "../types/aestethic-service-types";

export const newEstethicService = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readEstethicServices(1));
  };
};

export function add(data) {
  return {
    type: types.addAestethicService,
    payload: data,
  };
}

export const readEstethicServices = (page) => {
  return (dispatch) => {
    getAllEstethicServices(page).then((res) => {
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
    type: types.readAestethicServices,
    payload: data,
  };
}

export const newEstethicServiceOrder = (data) => {
  return (dispatch) => {
    dispatch(addOrder(data));
    dispatch(readEstethicServicesOrders(1));
  };
};

export function addOrder(data) {
  return {
    type: types.addEstheticOrder,
    payload: data,
  };
}

export const readEstethicServicesOrders = (page) => {
  return (dispatch) => {
    getAllEstethicServicesOrders(page).then((res) => {
      if (!res.ok) {
        dispatch(readOrder({}));
        return;
      }
      dispatch(readOrder(res));
    });
  };
};

export function readOrder(data) {
  return {
    type: types.readEstheticOrder,
    payload: data,
  };
}

export const readEstheticDetails = (id) => {
  return (dispatch) => {
    getEstethicDetail(id).then((res) => {
      if (res.msg) {
        dispatch(readDetails([]));
        return;
      }
      dispatch(readDetails(res));
    });
  };
};

export function readDetails(data) {
  return {
    type: types.readEstheticDetails,
    payload: data,
  };
}
