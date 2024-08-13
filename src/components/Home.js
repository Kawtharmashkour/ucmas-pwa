import React from 'react';
import Carousel from './Carousel';
import Card from './Card';

import './Home.css';

const Home = () => {
  return (
    <div>
     
      {/* Carousel */}
      <Carousel />
      {/* Card */}
      <Card />
    </div>
  );
};

export default Home;