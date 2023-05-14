import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ShirtPage from './Pages/ShirtPage';
import Collectionpage from './Pages/Collectionpage';
import Faqs from './Pages/Faqs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:productId" element={<ShirtPage />} />
        <Route path="/products" element={<Collectionpage />} />
        <Route path="/products/:league" element={<Collectionpage />} />
        <Route path="/FAQ's" element={<Faqs />} />
      </Routes>
    </Router>
  );
}

export default App;
