import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style.js';
import IconFontStyle from './static/iconfont/iconfont';
import Header from './common/header';
import store from './store';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFontStyle />
        <Provider store={store}>
          <Header />
          <div className="App">
          
          </div>
        </Provider>
    </Fragment>
  );
}

export default App;
