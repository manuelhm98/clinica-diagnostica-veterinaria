import { types } from "../types";

const initialState = {
  data: {},
};

export const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.shoppingAdd:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.shoppingRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
