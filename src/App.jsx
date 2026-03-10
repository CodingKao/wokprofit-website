/**
 * @file App.jsx
 * @description Root component handling application layout and routing
 */

// Core
import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;