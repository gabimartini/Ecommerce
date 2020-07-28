/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
import updateObject from '../utility';
import * as actionType from '../action/actionType';

const initialState = {
  data: [],
  dataSave: [],
  loading: false,
  error: null,

  checkedItems: [],
  iscotton: false,
  isviscose: false,
  isembroidery: false,
  isnatural: false,
  ispattern: false,
  modalShow: false,
  modal: false,

};

const reducer = (state = initialState, action) => {
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

      // modal open filter

    case actionType.CHANGEMODAL:
      return updateObject(state, { modal: true });

    case actionType.CHANGEMODALSHOW:
      return updateObject(state, { modalShow: true });

    case actionType.CLOSEMODAL:
      return updateObject(state, { modal: false });

    case actionType.CLOSEMODALSHOW:
      return updateObject(state, { modalShow: false });

      // Modal filter

    case actionType.COTTON:

      let cotton;
      if (state.iscotton === false) {
        cotton = true;
      } else {
        cotton = false;
      }

      const olddataCotton = { ...state };
      let newIsNameCotton = [];
      const IsNameCotton = action.item;
      let datanovaCotton = [];
      let SetDataCotton = [];

      if (cotton) {
        newIsNameCotton = olddataCotton.checkedItems.concat(IsNameCotton);
        datanovaCotton = olddataCotton.dataSave
          .filter((objeto) => newIsNameCotton.indexOf(objeto.detail) !== -1);
        SetDataCotton = [...new Set(datanovaCotton)];
      } else {
        newIsNameCotton = olddataCotton.checkedItems
          .filter((objeto) => objeto.indexOf(IsNameCotton) === -1);
        if (newIsNameCotton.length === 0) {
          SetDataCotton = olddataCotton.dataSave;
        } else {
          datanovaCotton = olddataCotton.data
            .filter((objeto) => newIsNameCotton.indexOf(objeto.detail) !== -1);
          SetDataCotton = [...new Set(datanovaCotton)];
        }
      }

      return updateObject(state, {
        iscotton: cotton,
        data: SetDataCotton,
        checkedItems: newIsNameCotton,
      });

    case actionType.VISCOSE:
      let viscose;

      if (state.isviscose === false) {
        viscose = true;
      } else {
        viscose = false;
      }

      const olddataViscose = { ...state };
      let newIsNameViscose = [];
      const IsNameViscose = action.item;
      let datanovaViscose = [];
      let SetDataViscose = [];

      if (viscose) {
        newIsNameViscose = olddataViscose.checkedItems.concat(IsNameViscose);
        datanovaViscose = olddataViscose.dataSave
          .filter((objeto) => newIsNameViscose.indexOf(objeto.detail) !== -1);
        SetDataViscose = [...new Set(datanovaViscose)];
      } else {
        newIsNameViscose = olddataViscose.checkedItems
          .filter((objeto) => objeto.indexOf(IsNameViscose) === -1);
        if (newIsNameViscose.length === 0) {
          SetDataViscose = olddataViscose.dataSave;
        } else {
          datanovaViscose = olddataViscose.data
            .filter((objeto) => newIsNameViscose.indexOf(objeto.detail) !== -1);
          SetDataViscose = [...new Set(datanovaViscose)];
        }
      }

      return updateObject(state, {
        isviscose: viscose,
        data: SetDataViscose,
        checkedItems: newIsNameViscose,
      });

    case actionType.NATURAL:
      let natural;

      if (state.isnatural === false) {
        natural = true;
      } else {
        natural = false;
      }

      const olddataNatural = { ...state };
      let newIsNameNatural = [];
      const IsNameNatural = action.item;
      let datanovaNatural = [];
      let SetDataNatural = [];

      if (natural) {
        newIsNameNatural = olddataNatural.checkedItems.concat(IsNameNatural);
        datanovaNatural = olddataNatural.dataSave
          .filter((objeto) => newIsNameNatural.indexOf(objeto.detail) !== -1);
        SetDataNatural = [...new Set(datanovaNatural)];
      } else {
        newIsNameNatural = olddataNatural.checkedItems
          .filter((objeto) => objeto.indexOf(IsNameNatural) === -1);
        if (newIsNameNatural.length === 0) {
          SetDataNatural = olddataNatural.dataSave;
        } else {
          datanovaNatural = olddataNatural.data
            .filter((objeto) => newIsNameNatural.indexOf(objeto.detail) !== -1);
          SetDataNatural = [...new Set(datanovaNatural)];
        }
      }

      return updateObject(state, {
        isnatural: natural,
        data: SetDataNatural,
        checkedItems: newIsNameNatural,
      });

    case actionType.EMBROIDERY:
      let embroidery;

      if (state.isembroidery === false) {
        embroidery = true;
      } else {
        embroidery = false;
      }

      const olddataEmbroidery = { ...state };
      let newIsNameEmbroidery = [];
      const IsNameEmbroidery = action.item;
      let datanovaEmbroidery = [];
      let SetDataEmbroidery = [];

      if (embroidery) {
        newIsNameEmbroidery = olddataEmbroidery.checkedItems.concat(IsNameEmbroidery);
        datanovaEmbroidery = olddataEmbroidery.dataSave
          .filter((objeto) => newIsNameEmbroidery.indexOf(objeto.detail) !== -1);
        SetDataEmbroidery = [...new Set(datanovaEmbroidery)];
      } else {
        newIsNameEmbroidery = olddataEmbroidery.checkedItems
          .filter((objeto) => objeto.indexOf(IsNameEmbroidery) === -1);
        if (newIsNameEmbroidery.length === 0) {
          SetDataEmbroidery = olddataEmbroidery.dataSave;
        } else {
          datanovaEmbroidery = olddataEmbroidery.data
            .filter((objeto) => newIsNameEmbroidery.indexOf(objeto.detail) !== -1);
          SetDataEmbroidery = [...new Set(datanovaEmbroidery)];
        }
      }

      return updateObject(state, {
        isembroidery: embroidery,
        data: SetDataEmbroidery,
        checkedItems: newIsNameEmbroidery,
      });

    case actionType.PATTERN:

      let pattern;
      if (state.ispattern === false) {
        pattern = true;
      } else {
        pattern = false;
      }

      const olddataPattern = { ...state };
      let newIsNamePattern = [];
      const IsNamePattern = action.item;
      let datanovaPattern = [];
      let SetDataPattern = [];

      if (pattern) {
        newIsNamePattern = olddataPattern.checkedItems.concat(IsNamePattern);
        datanovaPattern = olddataPattern.dataSave
          .filter((objeto) => newIsNamePattern.indexOf(objeto.detail) !== -1);
        SetDataPattern = [...new Set(datanovaPattern)];
      } else {
        newIsNamePattern = olddataPattern.checkedItems
          .filter((objeto) => objeto.indexOf(IsNamePattern) === -1);

        if (newIsNamePattern.length === 0) {
          SetDataPattern = olddataPattern.dataSave;
        } else {
          datanovaPattern = olddataPattern.data
            .filter((objeto) => newIsNamePattern.indexOf(objeto.detail) !== -1);
          SetDataPattern = [...new Set(datanovaPattern)];
        }
      }

      return updateObject(state, {
        ispattern: pattern,
        data: SetDataPattern,
        checkedItems: newIsNamePattern,
      });

    case actionType.IS_BEST_SELLING:

      let bestSeller;
      const bestState = { ...state };
      let dataBest = [];

      bestSeller = bestState.dataSave.filter((el) => el.seller > 5);

      dataBest = dataBest.concat(bestSeller);

      return updateObject(state, { data: dataBest });

    case actionType.IS_A_Z:

      let filter;
      const AState = { ...state };
      let dataA_Z = [];

      filter = AState.dataSave.sort((a, b) => (a.clotheName < b.clotheName ? -1
        : a.clotheName > b.clotheName ? 1 : 0));

      dataA_Z = dataA_Z.concat(filter);

      return updateObject(state, { data: dataA_Z });

    case actionType.IS_Z_A:

      let filterZ;
      const ZState = { ...state };
      let dataZ_A = [];

      filterZ = ZState.dataSave.sort((a, b) => (a.clotheName < b.clotheName ? 1
        : a.clotheName > b.clotheName ? -1 : 0));

      dataZ_A = dataZ_A.concat(filterZ);

      return updateObject(state, { data: dataZ_A });

    case actionType.IS_LOW:
      let filterL;
      const LState = { ...state };
      let dataL = [];

      filterL = LState.dataSave.sort((a, b) => a.price - b.price);

      dataL = dataL.concat(filterL);

      return updateObject(state, { data: dataL });

    case actionType.IS_HEIGHT:

      let filterH;
      const HState = { ...state };
      let dataH = [];

      filterH = HState.dataSave.sort((a, b) => b.price - a.price);

      dataH = dataH.concat(filterH);

      return updateObject(state, { data: dataH });

    default:
      return state;
  }
};

export default reducer;
