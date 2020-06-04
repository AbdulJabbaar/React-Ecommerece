import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppStore } from './redux/AppStore';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
