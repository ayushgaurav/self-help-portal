import React, { useState } from 'react';
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component
import '../styles/RegisterPage.css'; // Importing CSS from the styles folder

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!name) {
      isValid = false;
      errors['name'] = 'Please enter your name';
    }

    if (!email) {
      isValid = false;
      errors['email'] = 'Please enter your email';
    }

    if (!password) {
      isValid = false;
      errors['password'] = 'Please enter your password';
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form is valid');
      // Here, you can add logic for registering the user (e.g., API call)
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className="register-page">
      <Header />
        <div className="register-container">
        <h2>Register Page</h2>
        <form onSubmit={handleSubmit} className="register-form">
            <div>
            <label>Name:</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            {errors.name && <div className="error">{errors.name}</div>}
            </div>
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
            <button type="submit">Register</button>
        </form>
        </div>
        <Footer />
    </div>
);
}

export default RegisterPage;
