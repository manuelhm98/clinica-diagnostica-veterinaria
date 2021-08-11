import { types } from "../types";

const initialState = {
  data: [],
};

export const shiftReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.shiftAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.shiftRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
