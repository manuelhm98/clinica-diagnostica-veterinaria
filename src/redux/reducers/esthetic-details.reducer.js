import { types } from "../types/aestethic-service-types";

const initialState = {
  data: [],
};

export const estheticDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.readEstheticDetails:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
