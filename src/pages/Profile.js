import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import AvatarUploader from '../components/AvatarUploader';
import CourseRegistrationForm from '../components/CourseRegistrationForm';
//import CourseRegistrationForm from './CoureRegistrationForm';

function UserProfile() {

  const updateAvatar = (avatar) => {
    setUser({ ...user, avatar });
  };
  
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('/api/v1/user/profile', {
                        credentials: 'include' // Ensure cookies are sent with the request
                        });
                const data = await response.json();
                setUser(data);
                console.log('Profile data:',data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.error('User not logged in');
                } else {
                    console.error('Error fetching user profile:', error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleCourseRegistration = (newCourse) => {
        setUser({ ...user, courses: [...user.courses, newCourse] });
      };

  return (
    <Container style={{marginTop: '75px'}}>
            <Card className="border-radius-15">
              <Card.Body className="p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <AvatarUploader avatar='/assets/banner4.jpg' updateAvatar={updateAvatar} />
                    {/* <Image
                      src="/assets/banner4.jpg"
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{ width: '180px', borderRadius: '10px' }}
                    /> */}
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">{`${user.firstName} ${user.lastName}`}</h5>
                    <p className="mb-2 pb-1">{user.userType}</p>
                    <p className="mb-2 pb-1">{user.email}</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                      <div>
                        <p className="small text-muted mb-1">Assignments</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Points</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Grade</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <Button variant="secondary" className="me-1 flex-grow-1">
                        Message
                      </Button>
                      <Button variant="primary" className="flex-grow-1" onClick={()=> setShow(true)}>
                        Register a Course
                      </Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

        <CourseRegistrationForm show={show} onHide={()=> setShow(false)} onRegister={handleCourseRegistration}/>

    <div>
      <h3 className='mt-5'>Registered Courses</h3>
      {user.courses && user.courses.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Course Name</th>
              <th scope="col">Registration Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {user.courses.map((course, index) => (
              <tr key={index}>
                <td>{course.course.name}</td>
                <td>{new Date(course.registrationDate).toLocaleDateString()}</td>
                <td>{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No registered courses</p>
      )}
    </div>
    
        </Container>
    // <Container className="mt-5">
    //   <Row>
    //     <Col md={4} className="text-center">
    //       <AvatarUploader avatar={user.avatar} updateAvatar={updateAvatar} />
    //     </Col>
    //     <Col md={8}>
    //       <h1>{`${user.firstName} ${user.lastName}`}</h1>
    //       <p>{user.email}</p>
    //       <h3>Registered Courses</h3>
    //       <ul className="list-group">
    //         {user.courses.length > 0 ? user.courses.map((course, index) => (
    //           <li key={index} className="list-group-item">
    //             {course.name}
    //           </li>
    //         )) : <p>No registered courses</p>}
    //       </ul>
    //     </Col>
    //   </Row>
    //   <Row className="mt-4">
    //     <Col>
    //       <h2>Register for a Course</h2>
    //       <p>CourseRegistrationForm</p>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default UserProfile;
