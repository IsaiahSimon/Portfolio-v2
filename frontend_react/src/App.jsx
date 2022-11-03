import React from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Work />
    <About />
    <Skills />
    <Footer />
  </div>
);

export default App;
