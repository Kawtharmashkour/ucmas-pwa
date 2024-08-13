import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const Navigation = () => {
  const { authData, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand" to="/">UCMAS</NavLink>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events">EVENT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/programs">PROGRAM</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">GALLERY</NavLink>
            </li>
            {authData.isLoggedIn ? (
              <li className="nav-item">
              <button className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleLogout}>SIGN OUT</button>
            </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">SIGN IN</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;