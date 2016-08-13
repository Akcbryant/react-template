import React from 'react';
import ReactDOM from 'react-dom';
import sum from './app/sum';
import './sass/app.scss';

ReactDOM.render(<div>{sum(4, 1)}</div>,
  document.getElementById('app'));
