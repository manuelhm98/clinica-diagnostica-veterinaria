import { getAllQuotes } from "../../services/quotes";
import { types } from "../types";

export const addQuote = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readQuotes(1,""));
  };
};

export function add(data) {
  return {
    type: types.quoteAdd,
    payload: data,
  };
}

export const readQuotes = (page = 1,patient) => {
  return (dispatch) => {
    getAllQuotes(page,patient).then((res) => {
      if (!res.ok) {
        dispatch(read({}));
        return;
      }
      dispatch(read(res));
    });
  };
};

export function read(data) {
  return {
    type: types.quoteRead,
    payload: data,
  };
}
