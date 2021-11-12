import { types } from "../types/hospital-types";

const initialState = {
  data: {},
};

export const orderServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addOrderService:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readOrderServices:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
