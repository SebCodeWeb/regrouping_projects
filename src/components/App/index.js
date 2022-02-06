import React from 'react';

// import reactLogo from './react-logo.svg'; <img src={reactLogo} alt="react logo" />
import './app.scss';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
