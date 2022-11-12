import React from 'react';

import { About, Contact, Header, Skills, Work } from './container';
import { Navbar, Footer } from './components';


const App = () => (
  <div className="APP">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default App;
