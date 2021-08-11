import { types } from "../types/pest-control-type";

const initialState = {
  data: {},
};

export const pestControlTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addPestControlType:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readPestControlType:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
