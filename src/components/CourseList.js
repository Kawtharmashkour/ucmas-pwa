import React, { useEffect, useState } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/v1/course');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <div className="p-3">
      <ul className="list-group">
        {courses.map(course => {
            console.log(course);
            return(
          <li key={course._id} className="list-group-item">
            <h5>{course.name}  {new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}</h5>
            <p>Price: {course.price ? `$${course.price}` : 'No price available'}</p>
          </li>
        )})}
      </ul>
    </div>
  );
}

export default CourseList;
