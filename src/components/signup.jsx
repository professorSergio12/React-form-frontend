import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/signup.css';

export default function Signup() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    async function handleSubmit(e) {
        e.preventDefault(); // Prevent the form from reloading the page
        try {
            const response = await axios.post('https://react-form-server.onrender.com/api/signup', {
                firstname,
                lastname,
                email,
                password
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Signup successful:', response.data);

            // Display a success alert and navigate after user clicks "OK"
            alert('Signup successful!');
            navigate('/login'); // Navigate to the login page

        } catch (error) {
            console.error('There was an error signing up:', error);

            // Display an error alert
            alert('There was an error during signup. Please try again.');
        }
    }

    return (
        <div className='main-form-body'>
            <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="First Name"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Last Name"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <i className='bx bxs-user'></i>
                </div>
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
                <button type="submit" className="btn">Signup</button>
                <div className="register-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
        </div>
    );
}
