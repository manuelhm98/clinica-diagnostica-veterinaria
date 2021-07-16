import { types } from "../types";

const initialState = {
  data: [],
};

export const breedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.breedAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.breedRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
