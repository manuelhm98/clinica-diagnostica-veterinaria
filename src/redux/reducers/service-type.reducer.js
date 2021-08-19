import { types } from "../types";

const initialState = {
  data: {},
};

export const serviceTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.serviceTypeAdd:
      return {
        ...state,
        data: action.payload,
      };
    case types.serviceTypeRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.serviceTypePagin:
      return {
        ...state,
        data:action.payload
      }
    default:
      return state;
  }
};
