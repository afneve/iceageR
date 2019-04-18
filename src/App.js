import React, { Component } from 'react';
import './App.scss';

import Header from './components/structure/Header';
import Main from './components/structure/Main';
import Footer from './components/structure/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
