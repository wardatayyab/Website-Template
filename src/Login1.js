import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import All from './All';

export const Login1 = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if(auth) {
            navigate('/');
        }
    }, [navigate]);

    const fetchProducts = async (event) => {
        event.preventDefault();
        console.log(email, password);

        let data = await axios.post("http://localhost:3200/login", {
            email, password
        });

        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        if (data) {
            navigate('/');
        }
    };

    return (
    <>
    <All/>
    <div style={{ 
            display: 'flex', 
            marginTop: '-560px',
            marginLeft: '300px',
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: 'transparent', 
            position: 'relative' 
        }}>
            {/* Background Card Design */}
            <div className="backgroundCard"></div>

            <div className="form_main">
                <h2 className="heading">Create an Account</h2>
                <form onSubmit={fetchProducts}>
                    <div className="formGroup">
                        <label className="label">Email:</label>
                        <div className="inputContainer">
                            <FaEnvelope className="inputIcon" />
                            <input 
                                type="email" 
                                className="inputField" 
                                value={email} 
                                onChange={(e) => setemail(e.target.value)} 
                                required 
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="formGroup">
                        <label className="label">Password:</label>
                        <div className="inputContainer">
                            <FaLock className="inputIcon" />
                            <input 
                                type="password" 
                                className="inputField" 
                                value={password} 
                                onChange={(e) => setpassword(e.target.value)} 
                                required 
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                    <button type="submit" id="button">Sign up</button>
                </form>
            </div>

            {/* CSS */}
            <style>{`
                /* Global styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f5f5f5;
                }

                /* Main container for centering the form */
                .form_main {
                    width: 450px; /* Increased width */
                    padding: 40px;
                    background-color: #fff;
                    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
                    position: relative;
                    border-radius: 10px;
                    overflow: hidden;
                    z-index: 2;
                }             

                /* Heading styles */
                .heading {
                    font-size: 2.5em;
                    color: #2e2e2e;
                    font-weight: 700;
                    margin-bottom: 20px;
                    text-align: center;
                }

                /* Label for input fields */
                .label {
                    font-size: 1em;
                    color: #333;
                    font-weight: 600;
                }

                /* Input container */
                .inputContainer {
                    width: 100%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }

                .inputIcon {
                    position: absolute;
                    left: 10px;
                    color: #777;
                    font-size: 1.2em;
                }

                .inputField {
                    width: 100%;
                    height: 50px; /* Increased height */
                    background-color: transparent;
                    border: none;
                    border-bottom: 2px solid #ddd;
                    margin: 10px 0;
                    color: #333;
                    font-size: 1em;
                    font-weight: 500;
                    padding-left: 40px;
                    box-sizing: border-box;
                    border-radius: 5px;
                    transition: all 0.3s ease;
                }

                .inputField:focus {
                    outline: none;
                    border-bottom: 2px solid rgb(199, 114, 255);
                }

                .inputField::placeholder {
                    color: #777;
                    font-size: 1em;
                    font-weight: 500;
                }

                /* Submit button */
                #button {
                    width: 100%;
                    border: none;
                    background-color: rgb(162, 104, 255);
                    height: 50px; /* Increased height */
                    color: white;
                    font-size: 1em;
                    font-weight: 500;
                    letter-spacing: 1px;
                    margin-top: 10px;
                    cursor: pointer;
                    border-radius: 5px;
                }

                #button:hover {
                    background-color: rgb(126, 84, 255);
                }
            `}</style>
        </div>
        </>
    );
};