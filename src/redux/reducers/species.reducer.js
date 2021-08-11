import { types } from "../types";

const initialState = {
  data: {},
};

export const speciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.specieAdd:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.specieRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.specieList:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
