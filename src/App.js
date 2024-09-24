import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import OurTeam from './pages/Team/OurTeam';
import Contact from './pages/Contact/Contact';
import Header from './components/Header';
import OurGallery from './pages/Gallery/OurGallery';
import './App.css';  // Importing the CSS file

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<OurGallery />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
