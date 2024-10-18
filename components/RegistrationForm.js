import React, { useState } from 'react';
import authService from '../services/authService';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.register(email, password);
      setMessage(res.data.message); // Set success message
      // Optionally, you can redirect the user here
    } catch (error) {
      setMessage(error.response?.data?.error || 'Registration failed'); // Set error message
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
      {message && <p>{message}</p>} {/* Display success or error message */}
    </form>
  );
};

export default RegisterForm;
