import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './js/new-age.min.js';
import './css/index.css';
import './css/new-age.min.css';
import './css/device-mockups/device-mockups.min.css';

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

ReactDOM.render(
  <App />,
  document.getElementById('demo-screen-1')
);
