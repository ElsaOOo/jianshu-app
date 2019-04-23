import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<AppContainer />, document.getElementById('root'));

