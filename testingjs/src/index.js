import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Testing from './testing/test';
import SingleDisplay from './screens/SingleDisplay';

ReactDOM.render(
  <React.StrictMode>
    <Testing />
    <SingleDisplay />
  </React.StrictMode>,
  document.getElementById('root')
);
