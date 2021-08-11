import { types } from "../types";

const initialState = {
  data: [],
};

export const rolReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.roleAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.roleRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
