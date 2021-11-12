import { types } from "../types/hospital-types";

const initialState = {
  data: [],
};

export const orderServiceDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.readOrderDetail:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
