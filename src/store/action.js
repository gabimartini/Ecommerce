import * as action from './action/root';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default function fetchProducts() {
  return (dispatch) => {
    dispatch(action.fetchProductsBegin());
    // eslint-disable-next-line no-undef
    return fetch('http://localhost:4000')
      .then(handleErrors)
      .then((res) => res.json())
      .then((res) => {
        dispatch(action.fetchProductsSuccess(res.data));
        return res.data;
      })
      .catch((error) => dispatch(action.fetchProductsFailure(error)));
  };
}
