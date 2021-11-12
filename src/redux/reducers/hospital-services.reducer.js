import { types } from "../types/hospital-types";

const initialState = {
  data: {},
};

export const hospitalServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addHospitalService:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readHospitalServices:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
