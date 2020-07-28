import * as actionType from './actionType';

export const fetchProductsBegin = () => ({
  type: actionType.FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  type: actionType.FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsFailure = (error) => ({
  type: actionType.FETCH_PRODUCTS_FAILURE,
  payload: { error },
});
