/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-case-declarations */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
import updateObject from '../utility';

const initialState = {
  email: null,
  name: null,
  id: null,
};

const reducer_login = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      const nameAction = action.name;
      localStorage.setItem('idCustomer', action.id);
      return updateObject(
        {
          ...state,
          name: nameAction,
          email: action.email,
          id: action.id,
        },
      );
    default:
      return state;
  }
};

export default reducer_login;
