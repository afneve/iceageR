import React, { Component } from 'react';
import './App.scss';

import Header from './components/structure/Header';
import Main from './components/structure/Main';
import Footer from './components/structure/Footer';

import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <React.Fragment>
          <Header />
          <Main />
          <Footer />
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
