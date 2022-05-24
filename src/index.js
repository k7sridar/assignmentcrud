import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import Reducer from './components/redux/reducr';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const store = createStore(Reducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
