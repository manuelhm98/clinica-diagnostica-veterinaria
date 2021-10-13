import { types } from "../types/brand-type";

const initialState = {
  data: [],
};

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addBrand:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readBrands:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
