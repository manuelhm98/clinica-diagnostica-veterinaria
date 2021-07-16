import { types } from "../types";

const initialState = {
  data: [],
};

export const patTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.patTypeAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.patTypeRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
