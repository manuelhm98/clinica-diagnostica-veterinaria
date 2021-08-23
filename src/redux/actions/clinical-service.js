import { getAllClinicalServices } from "../../services/clinical-service";
import { types } from "../types/clinical-service-types";

export const readClinicalServices = (page, type, patient) => {
  return (dispatch) => {
    if (type !== "" || patient !== "") {
      page = 1;
    }
    getAllClinicalServices(page, type, patient).then((res) => {
      if (!res.ok) {
        dispatch(read({}));
        return;
      }
      dispatch(read(res));
    });
  };
};
export const addClinicalService = (values) => {
  return (dispatch) => {
    dispatch(add(values));
    dispatch(readClinicalServices(1, "", "", ""));
  };
};

export function add(data) {
  return {
    type: types.addClinicalService,
    payload: data,
  };
}

export function read(data) {
  return {
    type: types.readClinicalServices,
    payload: data,
  };
}
