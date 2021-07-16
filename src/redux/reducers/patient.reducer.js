import { types } from "../types";

const initialState = {
  data: [],
};

export const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.patientAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.patientRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
