import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './services/rotas';
import { Provider } from 'react-redux';
import store from './store-redux/store';


ReactDOM.render(
  <Provider store={store}>
    <Rotas />
  </Provider>,
  document.getElementById('root')
);

