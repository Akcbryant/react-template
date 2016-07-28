import React from 'react';
import ReactDOM from 'react-dom';
import sum from './app/sum';

ReactDOM.render(<div>{sum(3, 3)}</div>,
  document.getElementById('app'));
