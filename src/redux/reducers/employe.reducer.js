import { types } from "../types";

const initialState = {
  data: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userReadById:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
