import { types } from "../types/category-types";

const initialState = {
  data: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addCategory:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readCategories:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
