import { types } from "../types/sale-history";

const initialState = {
  data: {},
};

export const salesDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.readDetails:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
