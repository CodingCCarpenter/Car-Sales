import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//import reducer
import { reducer } from './reducers';

//styling imports
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);
console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
