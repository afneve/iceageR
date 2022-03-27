import React from 'react';
import './App.scss';

import Header from './components/structure/Header';
import Main from './components/structure/Main';
import Footer from './components/structure/Footer';

import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename='/'>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </HashRouter>
  );
}

export default App;
