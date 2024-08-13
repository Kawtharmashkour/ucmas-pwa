import React from 'react';
import { NavLink } from 'react-router-dom';

const Carousel = () => {
  return (
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/banner1.jpg" className="d-block w-100" alt="banner1" />
            <div className="carousel-caption">
            <h2 className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s', color: 'navy' }}>Welcome to UCMAS!</h2>
            <p className="animate__animated animate__bounceInLeft d-none d-md-block" style={{ animationDelay: '2s', color: 'navy' }}>The World’s Leading Abacus Math Program!</p>
            <p className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s' }}> <NavLink to="/signup">Register Today</NavLink></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/banner2.png" className="d-block w-100" alt="banner2" />
            <div className="carousel-caption">
              <h5 className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s', color: 'navy' }}>Welcome to UCMAS!</h5>
              <p className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s' }}> <NavLink to="/signup">Register Today</NavLink></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/banner3.jpg" className="d-block w-100" alt="banner3" />
            <div className="carousel-caption">
            <h5 className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s', color: 'navy' }}>Welcome to UCMAS!</h5>
              <p className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s' }}> <NavLink to="/signup">Register Today</NavLink></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/banner4.jpg" className="d-block w-100" alt="banner4" />
            <div className="carousel-caption">
            <h5 className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s', color: 'navy' }}>Welcome to UCMAS!</h5>
              <p className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s' }}> <NavLink to="/signup">Register Today</NavLink></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/banner5.png" className="d-block w-100" alt="banner5" />
            <div className="carousel-caption">
            <h5 className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s', color: 'navy' }}>Welcome to UCMAS!</h5>
              <p className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s' }}> <NavLink to="/signup">Register Today</NavLink></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/banner6.jpg" className="d-block w-100" alt="banner6" />
            <div className="carousel-caption">
            <h5 className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s', color: 'navy' }}>Welcome to UCMAS!</h5>
              <p className="animate__animated animate__bounceInRight" style={{ animationDelay: '1s' }}> <NavLink to="/signup">Register Today</NavLink></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
};

export default Carousel;