import { types } from "../types/vendors-types";

const initialState = {
  data: {},
};

export const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addVendor:
      return {
        ...state,
        data: { ...state.data, data: action.payload },
      };
    case types.readVendors:
      return {
        ...state,
        data: action.payload,
      };
    case types.listVendors:
      return{
        ...state,
        data:action.payload
      }
    default:
      return state;
  }
};
