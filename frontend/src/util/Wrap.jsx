import React from 'react';
import reducer from '../redux/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
  // please note that you can and should have multiple reducers.
  // see https://redux.js.org/api/combinereducers
  reducer,
  // work with Redux Dev Tools (https://github.com/zalmoxisus/redux-devtools-extension)
  // but only when we're developing our app (disable in production)
  process.env.NODE_ENV === 'development'
    && window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default ({ children }) => (
  <Provider store={store}>
    { children }
  </Provider>
);
