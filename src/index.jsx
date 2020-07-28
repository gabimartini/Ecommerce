/* eslint-disable no-undef */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './store/reducer/reducer_root';
import basket from './store/reducer/reducer_basket';
import reducerProduct from './store/reducer/reducer_product';
import login from './store/reducer/reducer_login';

import App from './App';

const rootReducer = combineReducers({
  reducer,
  basket,
  product: reducerProduct,
  login,
});

const logger = () => (next) => (action) => {
  // console.log('[Middleware] Dispatching', action);
  const result = next(action);
  // console.log('[Middleware] next state', store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDom.render(<Provider store={store}>{app}</Provider>, document.getElementById('root'));
