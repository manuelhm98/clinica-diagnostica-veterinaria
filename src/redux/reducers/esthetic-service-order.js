import { types } from "../types/aestethic-service-types";

const initialState = {
  data: {},
};

export const estethicServiceOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addEstheticOrder:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readEstheticOrder:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
