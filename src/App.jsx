import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Pack1 from './components/packs/Pack1';
import Pack2 from './components/packs/Pack2';
import Pack3 from './components/packs/Pack3';
import Pack4 from './components/packs/Pack4';
import Pack5 from './components/packs/Pack5';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pack1" element={<Pack1 />} />
          <Route path="/pack2" element={<Pack2 />} />
          <Route path="/pack3" element={<Pack3 />} />
          <Route path="/pack4" element={<Pack4 />} />
          <Route path="/pack5" element={<Pack5 />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

