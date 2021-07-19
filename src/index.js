import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { HashRouter } from 'react-router-dom';
import {createBrowserHistory as history } from 'history'
import './index.css';
import Application from './Application';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history()}>
    <HashRouter>
      <Application />
    </HashRouter>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
