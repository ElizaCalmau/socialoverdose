import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import store from './bll/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderTree = () => {
  root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={store.getState()}
    postsArray={store.getState().postsArray}
    dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>
  </React.StrictMode>
);
}
renderTree(store.getState());
store.subscriber(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();