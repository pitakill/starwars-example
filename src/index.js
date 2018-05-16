// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById("root");

if (root instanceof HTMLElement) {
    ReactDOM.render(<App />, root);
    registerServiceWorker();
}
