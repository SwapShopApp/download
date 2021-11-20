import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
//import Home from './home';
import Download from './download';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Download />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
