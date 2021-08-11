import { types } from "../types/vaccination-dose";

const initialState = {
  data: {},
};

export const vaccinationDoseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addVaccinationDose:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readVaccinationDose:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
