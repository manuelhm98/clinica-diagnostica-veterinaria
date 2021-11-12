import { getAllHospitalServices } from "../../services/hospital-service";
import { types } from "../types/hospital-types";

export const newHospitalService = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readHospitalServices(1));
  };
};

export function add(data) {
  return {
    type: types.addHospitalService,
    payload: data,
  };
}

export const readHospitalServices = (page) => {
  return (dispatch) => {
    getAllHospitalServices(page).then((res) => {
      if (!res.ok) {
        dispatch(read([]));
        return;
      }
      dispatch(read(res));
    });
  };
};

export function read(data) {
  return {
    type: types.readHospitalServices,
    payload: data,
  };
}
