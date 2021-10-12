import { types } from "../types/product-type";

const initialState = {
  data: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readProducts:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
