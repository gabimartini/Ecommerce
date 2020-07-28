/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
import updateObject from '../utility';
import * as actionType from '../action/actionType';

const initialState = {
  data: [],
  dataSave: [],
  loading: false,
  error: null,
  changeSize: [],

};

const reducer_basket = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PRODUCTS_BEGIN:
      return updateObject(state, { loading: true, error: null });

    case actionType.FETCH_PRODUCTS_SUCCESS:
      return updateObject(state, {
        loading: false,
        data: action.payload.products,
        dataSave: action.payload.products,
      });

    case actionType.FETCH_PRODUCTS_FAILURE:
      return updateObject(state, { loading: false, error: action.payload.error, data: state.data });

    case actionType.CHANGE_SIZE_BASKET:

      const { id } = action;
      const { value } = action;

      const objvalue = {
        id,
        value,
      };

      const obj = JSON.parse(localStorage.getItem('valueId'));
      let sizeChange = [];

      if (obj === null) {
        localStorage.setItem('valueId', JSON.stringify([objvalue]));
        sizeChange = [objvalue];
      } else {
        const newObj = obj.filter((el) => el.id !== id).map((element) => element);

        const storageObj = [];
        localStorage.setItem('valueId', JSON.stringify(storageObj.concat(newObj).concat(objvalue)));
        sizeChange = storageObj.concat(newObj).concat(objvalue);
      }

      return updateObject(state, { changeSize: sizeChange });

    case actionType.DELETE_DATA:
      localStorage.clear();

      return updateObject(state, { data: [], dataSave: [] });

    default:
      return state;
  }
};

export default reducer_basket;
