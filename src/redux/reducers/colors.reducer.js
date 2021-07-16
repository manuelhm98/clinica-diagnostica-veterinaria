import { types } from "../types";

const initialState = {
  data: [],
};

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.colorAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.colorRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
