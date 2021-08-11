import { types } from "../types";

const initialState = {
  data: [],
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.employeeAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.employeeRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
