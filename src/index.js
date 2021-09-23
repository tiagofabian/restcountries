import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/index.css";
// babel
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.querySelector('#root'),
);
