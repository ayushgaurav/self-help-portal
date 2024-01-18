import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!email) {
      isValid = false;
      newErrors['email'] = 'Please enter your email';
    }

    if (!password) {
      isValid = false;
      newErrors['password'] = 'Please enter your password';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form is valid');
      navigate('/my-queries'); // Redirect to My Queries page on successful validation
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-container">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
