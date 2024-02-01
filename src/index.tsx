import React from 'react';
import ReactDOM from 'react-dom/client';
//@ts-ignore
import './index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElem = document.getElementById('root')
if(rootElem){
  const root = ReactDOM.createRoot(rootElem);
  root.render(
  <Provider store={store} >
    <Router>
        <App />
     </Router>
  </Provider>
  );
}