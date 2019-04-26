import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import GlobalStyle from './style.js';
import IconFontStyle from './static/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFontStyle />
        <Provider store={store}>
          <Header />
          <Router>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' component={Detail}></Route>
          </Router>
        </Provider>
    </Fragment>
  );
}

export default App;
