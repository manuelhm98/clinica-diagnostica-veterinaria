import { types } from "../types/clinical-service-types";

const initialState = {
  data: {},
};

export const clinicalServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addClinicalService:
      return {
        ...state,
        data: action.payload,
      };
    case types.readClinicalServices:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
