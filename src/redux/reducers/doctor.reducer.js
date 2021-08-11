import { types } from "../types";

const initialState = {
  data: {},
};

export const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.doctorAdd:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.doctorRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
