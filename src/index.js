import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {firebaseInstance}  from 'fbInstance';

console.log(firebaseInstance );
ReactDOM.render(
 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
