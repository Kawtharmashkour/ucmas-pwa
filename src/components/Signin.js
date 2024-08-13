import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signin.css'; 
import { useAuth } from './AuthContext';

const Signin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/user/login', formData);
      login(response.data.user); 
      // Redirect based on user type
      if(response.data.user.userType === 'admin') navigate('/admin');
      else if(response.data.userType === 'teacher') navigate('/teacher');
      else navigate('/student');
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
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
              <img src="/Assets/football-boy.webp" alt="boy" />
            </div>
          </div>
          <div className="col-md-6 right">
            <form className="input-box" onSubmit={handleSubmit}>
              <header>Log In</header>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="input-field">
                <input type="email" className="input" name="email" id="email" required autoComplete="off" value={formData.email} onChange={handleChange} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" className="input" name="password" id="password" required autoComplete="off" value={formData.password} onChange={handleChange} />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-primary w-100 fs-6">Sign In</button>
              </div>
              <div className="signin">
                <span>Don't have an account? <a href="/signup">Sign Up Here</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;