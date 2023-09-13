import './Login.css';
import logo from './../../assets/rm.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault(); // Formani serverga yuborishni oldini oladi

        try {
            const response = await axios.post('http://manager.zafarr.uz/login/', {
                username: username,
                password: password,
            });
            console.log('Login successful');
            const token = response.data.tokens.access;
            localStorage.setItem('accessToken', token);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        if (token !== null) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <form action="" onSubmit={submit}>
            <div className="LoginGlav">
                <div className="LoginCard">
                    <div className="LoginTitle">
                        <img className='Logo' src={logo} alt="logo" />
                        <h3>Login</h3>
                    </div>
                    <div className="LoginUp">
                        <div className='Email'>
                            <label>Username:</label>
                            <input
                                type='text'
                                value={username}
                                required
                                onChange={e => setUsername(e.target.value)}
                                name="Username"
                                placeholder="Username:"
                            />
                        </div>
                        <div className='Password'>
                            <label>Password:</label>
                            <input
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                name="Password"
                                placeholder="Password:"
                            />
                        </div>
                    </div>
                    <div className="Kirish">
                        <button type='submit'>Log In</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
