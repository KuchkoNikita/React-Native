import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { AppNavigation } from './src/navigation/AppNavigation';
import reducer from './src/reducers/index';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__   
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(
  reducer, 
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const Api = {
  openweather: {
    key: 'b6ce763b1e16f6f845d8d595fa0efb2c',
    url: 'https://api.openweathermap.org/data/2.5/',
    urlIcon: 'http://openweathermap.org/img/wn/10d@2x.png'
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

