import { types } from "../types/deworming-type";

const initialState = {
  data: {},
};

export const dewormingTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addDewormingType:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readDewormingType:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
