import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import Promise from './views/promise';
import Thunk from './views/thunk';
import Saga from './views/saga';

import { AppWrapper } from './styled';

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Header />
          <Route exact path="/" component={Promise} />
          <Route path="/thunk" component={Thunk} />
          <Route path="/saga" component={Saga} />
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
