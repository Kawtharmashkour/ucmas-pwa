import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    userType: 'student',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ error: '', success: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage({ ...message, error: 'Passwords do not match' });
      return;
    }

    try {
      const response = await axios.post('/api/v1/user/signup', formData);
      setMessage({ error: '', success: 'User created successfully. Please login.' });
      navigate('/login');  // Redirect to login after successful signup, to be changed to dashbord
    } catch (error) {
      setMessage({ error: error.response?.data?.error || 'An error occurred', success: '' });
    }
  };

  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            <div className="logo">
              <a href="/"><img src="/Assets/logo.webp" alt="logo" /></a>
            </div>
            <div className="girl">
              <img src="/Assets/girl.webp" alt="girl" />
            </div>
          </div>
          <div className="col-md-6 right">
            <form className="input-box" onSubmit={handleSubmit}>
              <header>Sign Up</header>
              {message.error && <div className="alert alert-danger">{message.error}</div>}
              {message.success && <div className="alert alert-success">{message.success}</div>}
              <div className="d-flex justify-content-start">
                <div className="form-check me-4">
                  <input className="form-check-input" type="radio" name="userType" id="flexRadioDefault1" value="student" checked={formData.userType === 'student'} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">Student</label>
                </div>
                <div className="form-check me-4">
                  <input className="form-check-input" type="radio" name="userType" id="flexRadioDefault2" value="teacher" checked={formData.userType === 'teacher'} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">Teacher</label>
                </div>
              </div>
              <div className="input-field mt-4">
                <input type="text" className="input" name="firstName" required autoComplete="off" value={formData.firstName} onChange={handleChange} />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field">
                <input type="text" className="input" name="lastName" required autoComplete="off" value={formData.lastName} onChange={handleChange} />
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="input-field">
                <input type="email" className="input" name="email" required autoComplete="off" value={formData.email} onChange={handleChange} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" className="input" name="password" required autoComplete="off" value={formData.password} onChange={handleChange} />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field">
                <input type="password" className="input" name="confirmPassword" required autoComplete="off" value={formData.confirmPassword} onChange={handleChange} />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </div>
              <div className="signin">
                <span>Already have an account? <a href="/login">Sign In Here</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;