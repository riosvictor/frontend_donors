import React from 'react';

import Header from './components/Header';
import FormDonor from './components/FormDonor';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FormDonor />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
