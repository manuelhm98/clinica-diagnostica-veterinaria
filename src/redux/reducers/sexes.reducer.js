import { types } from "../types";

const initialState = {
  data: [],
};

export const sexReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.sexesAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.sexesRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
