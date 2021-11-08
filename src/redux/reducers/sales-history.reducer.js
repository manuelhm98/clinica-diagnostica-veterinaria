import { types } from "../types/sale-history";

const initialState = {
  data: {},
};

export const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addSale:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readSales:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
