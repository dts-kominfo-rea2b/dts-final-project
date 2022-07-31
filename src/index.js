import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-multi-carousel/lib/styles.css';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initalState';
import reducer from './context/reducer';
import { SearchProvider } from 'context/search/use-search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <SearchProvider>
          <App />
        </SearchProvider>
      </StateProvider>
    </Router>
    ,
  </React.StrictMode>
);
