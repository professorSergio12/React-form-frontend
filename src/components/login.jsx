import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/login.css';

export default function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('https://react-form-server.onrender.com/api/login', {
                email,
                password
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            console.log('Login successful:', response.data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            alert('Login successful!');
            navigate('/blog');

        } catch (error) {
            console.error('There was an error logging in:', error);

            // Display an error alert
            alert('There was an error during login. Please try again.');
        }
    }

    return (
        <div className='main-form-body'>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Remember Me
                        </label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
