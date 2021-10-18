import { types } from "../types/product-type";

const initialState = {
  data: {},
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cartReadItem:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
