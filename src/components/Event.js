import React from 'react';
import { NavLink } from 'react-router-dom';
import './Event.css'; 

const Event = ({ title, description, date, link }) => {
  return (
    <div className="event-container">
      <h2 className="event-title">{title}</h2>
      <p className="event-date">{date}</p>
      <p className="event-description">{description}</p>
      <NavLink to={link} className="event-link">Learn More</NavLink>
    </div>
  );
};

export default Event;