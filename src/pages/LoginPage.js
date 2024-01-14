import React, { useState } from 'react';
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component
import '../styles/LoginPage.css'; // Importing CSS from the styles folder

function LoginPage() {
  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State for handling validation errors
  const [errors, setErrors] = useState({});

  // Function to validate the form
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    // Basic email validation
    if (!email) {
      isValid = false;
      errors['email'] = 'Please enter your email';
    }

    // Basic password validation
    if (!password) {
      isValid = false;
      errors['password'] = 'Please enter your password';
    }

    setErrors(errors);
    return isValid;
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form is valid');
      // Here you can add logic to handle the login, like making an API call
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
