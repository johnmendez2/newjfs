import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ShirtPage from './Pages/ShirtPage';
import Collectionpage from './Pages/Collectionpage';
import Faqs from './Pages/Faqs';
import Blogs from './Pages/Blogs';
import Realmadridkitevolution from './Pages/Blogs/RMAkitevo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:productId" element={<ShirtPage />} />
        <Route path="/products" element={<Collectionpage />} />
        <Route path="/products/:league" element={<Collectionpage />} />
        <Route path="/FAQs" element={<Faqs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/RealMadridkitevolution" element={<Realmadridkitevolution />} />
      </Routes>
    </Router>
  );
}

export default App;
