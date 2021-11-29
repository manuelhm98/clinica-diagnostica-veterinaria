import { colorList, getAllColors } from "../../services/colors";
import { types } from "../types";

export const addColor = (data) => {
  return (dispatch) => {
    dispatch(add(data));
    dispatch(readColors(1,""));
  };
};

export function add(data) {
  return {
    type: types.colorAdd,
    payload: data,
  };
}

export const readColors = (page = 1, type = "",limit=25) => {
  return (dispatch) => {
    getAllColors(page, type,limit).then((res) => {
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
    type: types.colorRead,
    payload: data,
  };
}

export const listColor = () => {
  return (dispatch) => {
    colorList().then((res) => {
      if (res.msg) {
        dispatch(list({}));
        return;
      }
      dispatch(list(res));
    });
  };
};

export function list(data) {
  return {
    type: types.colorList,
    payload: data,
  };
}
