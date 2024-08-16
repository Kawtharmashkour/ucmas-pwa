import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function CourseRegistrationForm({ show, onHide, onRegister }) {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch available courses from the server
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/v1/course');
        setAvailableCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      console.log(selectedCourseId);
      const response = await axios.post('/api/v1/user/register-course', {
        courseId: selectedCourseId
      });

      if (response.status === 200) {
        onRegister(response.data.course);
        setSelectedCourseId(''); // Reset course selection
        alert('Registration successful! The status is pending approval.');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('You are already registered for this course.');
      } else {
        console.error('Error registering for course:', error);
        alert('An error occurred while registering for the course.');
      }
    } finally {
      setLoading(false);
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Register for a Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCourseSelect">
            <Form.Label>Select a Course</Form.Label>
            <Form.Control 
              as="select" 
              value={selectedCourseId} 
              onChange={(e) => setSelectedCourseId(e.target.value)} 
              required
            >
              <option value="" disabled>Select course</option>
              {availableCourses.map(course => (
                <option key={course._id} value={course._id}>{course.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
        <div className="d-flex justify-content-end">
          <Button className="mt-3 me-2" variant="secondary" onClick={onHide}>
          Close
         </Button>
          <Button  className="mt-3"variant="primary" type="submit">
            Register
          </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CourseRegistrationForm;
