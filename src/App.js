import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Footer from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles'; // Import GlobalStyles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'; // If app.css is in the src directory, this should work
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      {/* Inline styles for the watermark */}
      <div
        style={{
          position: 'relative', // Ensures normal stacking of content
          minHeight: '100vh', // Ensures it spans the viewport
        }}
      >
        {/* Main content */}
        <GlobalStyles /> {/* Apply global styles */}
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
