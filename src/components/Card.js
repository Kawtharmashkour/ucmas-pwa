import React, { useState, useEffect } from 'react';
import axios from 'axios';
const images = [
    '/assets/course1.jpeg',
    '/assets/course2.png',
    '/assets/course3.jpeg'
  ];

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  }; //Randomly shuffle image


const Card = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/v1/course');
        setCourses(response.data.slice(0,6 ));
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container my-5" >
      <h2 className="text-center mb-4">Upcoming Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div key={course._id} className="col-md-4 mb-3">
            <div className="card">
            <img 
                src={course.image || getRandomImage()}
                className="card-img-top" 
                alt={course.title || 'Course Image'}
              />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">Maximum age: {course.maxAge}</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;