import {
  FILTERLIST,
  EMPTYBASKET,
  ADDLISTELEMENT,
  CHECKLISTELEMENT,
} from "../constants/index";

export const filterData = (keyword) => {
  return {
    type: FILTERLIST,
    payload: keyword,
  };
};

export const emptyBasket = () => {
  return {
    type: EMPTYBASKET,
  };
};

export const addElement = (item) => {
  return {
    type: ADDLISTELEMENT,
    payload: item,
  };
};

export const checkElement = (item) => {
  return {
    type: CHECKLISTELEMENT,
    payload: item,
  };
};
