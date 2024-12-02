import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaApple, FaMicrosoft } from 'react-icons/fa';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const fetchProducts = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3200/register', {
        name,
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
   {/* < Sidebar/> */}
    <div style={styles.container}>
   
      <h1 style={styles.heading}>sign up</h1>
      <form onSubmit={fetchProducts} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <div style={styles.inputContainer}>
            <FaUser style={styles.icon} />
            <input 
              type="text" 
              style={styles.input} 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
              required 
            />
          </div>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <div style={styles.inputContainer}>
            <FaEnvelope style={styles.icon} />
            <input 
              type="email" 
              style={styles.input} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input 
              type="password" 
              style={styles.input} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
            />
          </div>
        </div>  
        <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
        <p style={styles.orText}>Or Sign Up With</p>
        <div style={styles.iconRow}>
          <FaGoogle style={styles.socialIcon} />
          <FaApple style={styles.socialIcon} />
          <FaMicrosoft style={styles.socialIcon} />
        </div>      
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    background: '#F8F9FD',
    backgroundImage: 'linear-gradient(0deg, #ffffff 0%, #f4f7fb 100%)',
    borderRadius: '40px',
    padding: '25px 35px',
    border: '5px solid #ffffff',
    boxShadow: 'rgba(133, 189, 215, 0.88) 0px 30px 30px -20px',
    margin: '20px auto',
    textAlign: 'left', // Aligns text to the left instead of center
  },
  heading: {
    fontWeight: '900',
    fontSize: '30px',
    color: '#1089d3',
    textAlign: 'center', // Keeps the heading centered
  },
  form: {
    marginTop: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    background: 'white',
    padding: '5px',
    boxShadow: '#cff0ff 0px 10px 10px -5px',
  },
  icon: {
    margin: '0 10px',
    color: '#1089d3',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
  },
  forgotPassword: {
    display: 'block',
    color: '#1089d3',
    marginTop: '10px',
    textDecoration: 'none',
    fontSize: '14px',
  },
  orText: {
    margin: '20px 0',
    color: '#555',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  socialIcon: {
    fontSize: '30px',
    color: '#1089d3',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  button: {
    width: '100%',
    padding: '15px',
    background: 'linear-gradient(45deg, #1089d3 0%, #12b1d1 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    margin: '20px 0',
    boxShadow: 'rgba(133, 189, 215, 0.88) 0px 20px 10px -15px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  },
};

export default Register;