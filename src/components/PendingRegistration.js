import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';

function PendingRegistration() {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetchPendingRegistration();
    }, []);

    const fetchPendingRegistration = async() => {
        try {
            const response = await fetch('/api/v1/user/students/pending');
            const data = await response.json();
            setStudents(data)
        } catch(error){
            console.error("Error loading pending registration: ",error);
        }
    }

    const approveRegistration = async (userId, courseId) => {
        try {
            await fetch(`/api/v1/user/students/approve/${userId}/${courseId}`);
            alert('Registration Approved');
            fetchPendingRegistration();
        } catch(error){
            console.error("Error approving registration: ",error);
            alert('Fail to approve registration.');
        }
    }

    const deleteRegistration = async (userId, courseId) => {
        try {
            await fetch(`api/v1/user/students/delete/${userId}/${courseId}`, { method: 'DELETE' });
            alert('Registration deleted');
            fetchPendingRegistration();
        } catch(error){
            console.error("Error deleting registration: ",error);
            alert('Fail to delete registration.');
        }
    }

  return (
    <div>
      {students.map( student => {
        
        return(
        <div key={student.userId}>
            <h6><b>{student.userName} ({student.userEmail})</b></h6>
            <ul>
            {student.pendingCourses.map(course => (
              <li key={`${student.userId}-${course.courseId}`} className='mb-2'>
                {course.courseName} - Registered on {new Date(course.registrationDate).toLocaleDateString()}
                <Button
                  className='mx-3'
                  variant="success"
                  size="sm"
                  onClick={() => approveRegistration(student._id, course.courseId)}
                >
                  Approve
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteRegistration(student._id, course.courseId)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )})}
    </div>
  )
}

export default PendingRegistration
