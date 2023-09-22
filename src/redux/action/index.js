import { ADDITEM, DELITEM } from './types';

export const addCart = (product) => ({
  type: ADDITEM,
  payload: product,
});

export const delCart = (product) => ({
  type: DELITEM,
  payload: product,
});
export const incQty = (product) => ({
  type: "INCQTY",
  payload: product,
});

export const decQty = (product) => ({
  type: "DECQTY",
  payload: product,
});
