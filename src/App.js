import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Event from './components/Event'; 
import Navigation from './components/Navigation'; 
import Signin from './components/Signin'; 
import Admin from './pages/Admin';
import Program from './components/Program';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Event/>} />
        <Route path="/programs" element={<Program/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;