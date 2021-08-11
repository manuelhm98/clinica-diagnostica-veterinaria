import { types } from "../types";

const initialState = {
  data: [],
};

export const speciallyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.speciallyAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.speciallyRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
