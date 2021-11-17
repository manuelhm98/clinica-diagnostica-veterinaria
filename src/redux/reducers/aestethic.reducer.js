import { types } from "../types/aestethic-service-types";

const initialState = {
  data: {},
};

export const estethicServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addAestethicService:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readAestethicServices:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
