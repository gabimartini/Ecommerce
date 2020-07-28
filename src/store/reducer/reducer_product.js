/* eslint-disable no-undef */
/* eslint-disable radix */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
import updateObject from '../utility';
import * as actionType from '../action/actionType';

const initialState = {
  data: [],
  dataSave: [],
  loading: false,
  error: null,
  dataFilter: [],
  BasketArr: [],
  size: [],
  idBasket: [],
  actionId: [],

};

const reducer_product = (state = initialState, action) => {
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

      // select size

    case actionType.SIZE1:
      const sizeOneNew = 'UK1';
      const sizeOnearrOld = { ...state };
      let sizeOneArr = [];

      sizeOneArr = sizeOnearrOld.size.concat(sizeOneNew);

      return updateObject(state, { size: sizeOneArr });

    case actionType.SIZE2:
      const sizeTwoNew = 'UK2';

      const sizeTwoarrOld = { ...state };
      let sizeTwoArr = [];

      sizeTwoArr = sizeTwoarrOld.size.concat(sizeTwoNew);

      return updateObject(state, { size: sizeTwoArr });

    case actionType.SIZE4:
      const sizeFourNew = 'UK4';

      const sizeFourarrOld = { ...state };
      let sizeFourArr = [];

      sizeFourArr = sizeFourarrOld.size.concat(sizeFourNew);

      return updateObject(state, { size: sizeFourArr });

    case actionType.SIZE6:
      const sizeSixNew = 'UK6';

      const sizeSixarrOld = { ...state };
      let sizeSixArr = [];

      sizeSixArr = sizeSixarrOld.size.concat(sizeSixNew);

      return updateObject(state, { size: sizeSixArr });

    case actionType.SIZE8:
      const sizeEightNew = 'UK8';

      const sizeEightarrOld = { ...state };
      let sizeEightArr = [];

      sizeEightArr = sizeEightarrOld.size.concat(sizeEightNew);

      return updateObject(state, { size: sizeEightArr });

    case actionType.SIZE10:
      const sizeTenNew = 'UK10';

      const sizeTenarrOld = { ...state };
      let sizeTenArr = [];

      sizeTenArr = sizeTenarrOld.size.concat(sizeTenNew);

      return updateObject(state, { size: sizeTenArr });

    case actionType.SIZE12:
      const sizeTwelveNew = 'UK12';

      const sizeTwelvearrOld = { ...state };
      let sizeTwelveArr = [];

      sizeTwelveArr = sizeTwelvearrOld.size.concat(sizeTwelveNew);

      return updateObject(state, { size: sizeTwelveArr });

      // Put in the Basket

    case actionType.BUY:
      const idOld = { ...state };

      const { idbasket } = action;
      const sizeBasket = idOld.size;

      const maxArr = idOld.data.map((product) => Math
        .max(product.UK1, product.UK2, product.UK4, product.UK6, product.UK8,
          product.UK10, product.UK12)).sort().pop();

      const img = idOld.dataSave.filter((product) => parseInt(product.image_id)
      === parseInt(action.idbasket)).map((elem) => elem.image1);

      const price = idOld.dataSave.filter((product) => parseInt(product.image_id)
        === parseInt(action.idbasket)).map((elem) => elem.price);

      const name = idOld.dataSave.filter((product) => parseInt(product.image_id)
      === parseInt(action.idbasket)).map((elem) => elem.clotheName);

      const basketid = idOld.idBasket.concat(idbasket);
      const actionIdOld = idOld.actionId.concat(action.idbasket);

      const idArr = idOld.size.map((sizeElement) => {
        const mS = idOld.dataSave.filter((product) => product.image_id
        === parseInt(action.idbasket)).map((el) => el[sizeElement]);
        let mSArr = [];
        for (let i = 1; i <= mS; i += 1) {
          mSArr = mSArr.concat(i);
        }
        return {
          key: Math.floor(Math.random() * 100),
          id: action.idbasket,
          size: sizeElement,
          img: img[0],
          price,
          name,
          max: mSArr,
        };
      });

      const newId = idOld.dataFilter.concat(idArr);

      const getLocalStorage = JSON.parse(localStorage.getItem('dataFilter'));
      const arrStorage = [];
      arrStorage.concat(getLocalStorage);

      localStorage.setItem('dataFilter', JSON.stringify(...arrStorage, newId));
      localStorage.setItem('idBasket', basketid);
      localStorage.setItem('max', maxArr);

      return updateObject(state, {
        BasketArr: sizeBasket,
        size: [],
        idBasket: basketid,
        dataFilter: newId,
        actionId: actionIdOld,
      });

    case actionType.DELETE_BASKET:
      const deleteId = action.basketid;
      const deleteSize = action.basketsize;

      const getdF = JSON.parse(localStorage.getItem('dataFilter'));
      const Obj = getdF.filter((obj) => parseInt(obj.Id)
      !== parseInt(deleteId) && (obj.size) !== (deleteSize));

      localStorage.setItem('dataFilter', JSON.stringify(Obj));

      return updateObject(state, { dataFilter: Obj });

    default:
      return state;
  }
};

export default reducer_product;
