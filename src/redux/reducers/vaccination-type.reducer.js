import { types } from "../types/vaccination-type";

const initialState = {
  data: {},
};

export const vaccinationTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addVaccinationType:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readVaccinationType:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
