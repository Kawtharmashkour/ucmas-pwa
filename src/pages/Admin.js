import React from 'react';
import { Container, Card } from 'react-bootstrap';
import CourseForm from '../components/CourseForm';
import PendingRegistration from '../components/PendingRegistration';
import CourseList from '../components/CourseList';

function Admin() {
  return (
    <Container className='mt-5'>
        <h1 className='mb-1'>Welcome to the Admin Panel</h1>
        <Card className='mb-3'>
            <Card.Header><b>Create New Course</b></Card.Header>
            <Card.Body>
                <CourseForm/>
            </Card.Body>
        </Card>

        <Card className='mb-3'>
            <Card.Header><b>Pending Course Registrations</b></Card.Header>
            <Card.Body>
                <PendingRegistration/>
            </Card.Body>
      </Card>

      <Card>
        <Card.Header><b>Course List</b></Card.Header>
        <Card.Body>
          <CourseList/>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Admin
