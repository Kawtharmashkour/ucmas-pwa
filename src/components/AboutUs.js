import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <>
    <div className="banner">
        <img src="../assets/AboutUs.png" alt="Event Banner" className="banner-image" />
    </div>

    <div className="about-container">
      <h1 className="about-title">About UCMAS</h1>
      <p className="about-description">
        The first UCMAS centre opened its doors in 1993 in Malaysia based on the simple premise: Provide quality 
        <a href="/programs">Abacus and Mental Math Training</a> to children in the age group of 5-13 years and help them
        <a href="/signup">"Discover the Genius Within"</a>.
      </p>
      <p className="about-description">
        Legions of students registered for this program and over the years UCMAS developed as an International concept offering this
        wonderful program, world wide, across:
      </p>
      <div className="statistics">
        <div className="stat-item">
          <img src="/assets/centers.png" alt="Centres" />
          <span>6000+ CENTRES</span>
        </div>
        <div className="stat-item">
          <img src="/assets/countries.png" alt="Countries" />
          <span>80+ COUNTRIES</span>
        </div>
      </div>
      <p className="about-description">
        UCMAS (Universal Concept Mental Arithmetic System) – an ISO 9001:2008 certified course, is a unique child development
        program that was founded in Malaysia by Dr. Dino Wong.
      </p>
      <h2>About the Concept</h2>
      <p className="about-description">
        The UCMAS program is based on the ancient, simple but powerful Abacus tool that provides countable beads for children to
        visualize numbers. Children learn to manipulate those beads to perform arithmetic calculation such as addition, subtraction,
        multiplication and division.
      </p>
      <p className="about-description">
        UCMAS children are trained in rapid math calculation with the help of physical abacus. Later, they move on to mental calculations
        where they develop the ability to picture the abacus in their minds and calculate quickly. The crucial concept of visualization or
        thinking in pictures leverages the right brain and leads to dramatically higher levels of speed, efficiency and accuracy.
      </p>
      <p className="about-description">
        The UCMAS program incorporates and enhances Auditory, Visual and Kinesthetic/Tactile learning styles in each child. It fosters
        active learning and activates key cognitive functions such as:
      </p>
      <ul className="cognitive-functions">
        <li>Memory</li>
        <li>Attention</li>
        <li>Perception</li>
        <li>Focus</li>
        <li>Reasoning</li>
      </ul>
    </div>
    </>
  );
};

export default AboutUs;