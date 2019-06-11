import React from "react";
import ReactDOM from "react-dom";

import App from './components/App';

import * as serviceWorker from './serviceWorker'

import 'regenerator-runtime/runtime';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const wrapper = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  wrapper);
  
serviceWorker.register();
