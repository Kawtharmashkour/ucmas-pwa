import React from 'react';
import Carousel from './Carousel';

// Import any additional CSS you need for this component
import './Home.css'; // Adjust the path according to your project structure

const Home = () => {
  return (
    <div>
     
      {/* Carousel */}
      <Carousel />
      {/* Additional content such as upcoming courses can also be added here */}
    </div>
  );
};

export default Home;