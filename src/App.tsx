import React from 'react';
import './App.css';

import {Navbar} from './components/Navbar/Navbar';
import {Banner} from './components/Banner/Banner'
import {RowContainer} from './components/Rows/Row-Container/RowContainer'
import {Footer} from './components/Footer/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowContainer />
      <Footer />
    </div>
  );
}

export default App;
