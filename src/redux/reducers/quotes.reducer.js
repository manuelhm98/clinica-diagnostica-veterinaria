import { types } from "../types";

const initialState = {
  data: {},
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.quoteAdd:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.quoteRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
