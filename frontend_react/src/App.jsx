import React from 'react';

import { About, Contact, Header, Skills, Work } from './container';
import { Navbar } from './components';


const App = () => (
  <div className="APP">
    <Navbar />
    <Header />
    <Work />
    <About />
    <Skills />
    <Contact />
  </div>
);

export default App;
