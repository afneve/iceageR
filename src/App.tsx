import { HashRouter } from "react-router-dom";

import './App.scss';

import Header from './components/structure/Header';
import Main from './components/structure/Main';
import Footer from './components/structure/Footer';

const App = () => {
  return (
    <HashRouter>
        <Header />
        <Main />
        <Footer />
    </HashRouter>
  );
}

export default App;
