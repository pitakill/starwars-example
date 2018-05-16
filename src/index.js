// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById("root");

if (root instanceof HTMLElement) {
    ReactDOM.render(<Router />, root);
    registerServiceWorker();
}
