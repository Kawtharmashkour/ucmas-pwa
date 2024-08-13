import React, {useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function CourseForm() {
    const initialCourseState = {
        name: '',
        program: '',
        price: '',
        maxAge: '',
        duration: '',
        startDate: '',
        endDate: ''
      };

    const [programs, setPrograms] = useState([]);
    const [course, setCourse] = useState(initialCourseState);

    useEffect(()=>{
        fetchPrograms();
    }, []);

    const fetchPrograms = async () => {
        try {
            const response = await fetch('/api/v1/program');
            const data = await response.json();
            setPrograms(data);
        } catch(error){
            console.error("Error fetching programs: ",error);
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourse({...course, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{

            const response = await fetch('/api/v1/course', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(course)
                    });
            if(response.ok){
                alert('New Course Created Successfully ');
                setCourse(initialCourseState);
            }else {
                const errorData = await response.json();
                console.error('Failed to create course', errorData);
            }

        } catch(error){
            console.error("Error creating course: ",error);
        }
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Course Title</Form.Label>
        <Form.Control type='text' name='name' value={course.name} onChange={handleInputChange} required/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Program</Form.Label>
        <Form.Control as='select' name='program' value={course.program} onChange={handleInputChange} required>
            <option value="" disabled>Select a program</option>
            {
                programs.map( program => (
                    <option key={program._id} value={program._id}>
                        {program.name}
                    </option>
                ))
            }
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Course Price</Form.Label>
        <Form.Control type='number' name='price' value={course.price} onChange={handleInputChange} required/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Maximum Age</Form.Label>
        <Form.Control type='number' name='maxAge' value={course.maxAge} onChange={handleInputChange} required/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Duration (Months)</Form.Label>
        <Form.Control type='number' name='duration' value={course.duration} onChange={handleInputChange} required/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Start Date</Form.Label>
        <Form.Control type='date' name='startDate' value={course.startDate} onChange={handleInputChange} required/>
      </Form.Group>

      <Form.Group>
        <Form.Label>End Date</Form.Label>
        <Form.Control type='date' name='endDate' value={course.endDate} onChange={handleInputChange} required/>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button className='mt-3' variant='primary' type='submit'>
            Submit
        </Button>
      </div>

    </Form>

  )
}

export default CourseForm
