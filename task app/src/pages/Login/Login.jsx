import './Login.css';
import logo from './../../assets/rm.svg';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const handleLogin = async () => {
        const username = userNameRef.current.value;
        const password = passwordRef.current.value;

        try {
            const response = await axios.post('http://manager.zafarr.uz/login/', {
                username: username,
                password: password,
            });
            console.log('Login successful');
            const token = response.data.tokens.access;
            localStorage.setItem('accessToken', token);
            navigate('/')
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    const token = localStorage.getItem('accessToken')


    useEffect(() => {
        if (token !== null) { // Token mavjud bo'lsa, sahifani avvalgi sahifaga qaytarish
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <>
            <div className="LoginGlav">
                <div className="LoginCard">
                    <div className="LoginTitle">
                        <img className='Logo' src={logo} alt="logo" />
                        <h3>
                            Login
                        </h3>
                    </div>
                    <div className="LoginUp">
                        <div className='Email'>
                            <label>Username:</label>
                            <input ref={userNameRef} type="text" name="Username" placeholder="Username:" />
                        </div>
                        <div className='Password'>
                            <label>Password:</label>
                            <input ref={passwordRef} type="password" name="Password" placeholder="Password:" />
                        </div>
                    </div>
                    <div className="Kirish">
                        <button onClick={handleLogin}>Log In</button>
                    </div>
                </div>
            </div>
        </>
    )
}