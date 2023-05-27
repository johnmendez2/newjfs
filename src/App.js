import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ShirtPage from './Pages/ShirtPage';
import Collectionpage from './Pages/Collectionpage';
import Faqs from './Pages/Faqs';
import Giveaways from './Pages/Giveaways';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:productId" element={<ShirtPage />} />
        <Route path="/products" element={<Collectionpage />} />
        <Route path="/products/:league" element={<Collectionpage />} />
        <Route path="/FAQs" element={<Faqs />} />
        <Route path="/giveaways" element={<Giveaways />} />
      </Routes>
    </Router>
  );
}

export default App;
