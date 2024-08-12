import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Event from './components/Event'; 
import Navigation from './components/Navigation'; 
import Signin from './components/Signin'; 

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Event/>} />
        <Route path="/programs" element={<div>Programs Page</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/gallery" element={<div>Gallery</div>} />
        <Route path="/login" element={<Signin/>} />
      </Routes>
    </Router>
  );
}

export default App;