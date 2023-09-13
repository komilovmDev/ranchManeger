import './Login.css';
import logo from './../../assets/rm.svg';
import { Link } from 'react-router-dom';
import { useEffect, useRef , useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password,
        };

        try {
            // Create the POST request
            const response = await axios.post('http://manager.zafarr.uz/token/', user, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true, // This is set correctly within the object
            });

            // Destructure the data from the response
            const { access, refresh } = response.data;

            // Initialize the access & refresh token in local storage.
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            // Set the Authorization header for future axios requests.
            axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

            // Redirect the user to a different page (e.g., homepage) upon successful login.
            window.location.href = '/';
        } catch (error) {
            console.error('Login failed', error);
            // You can handle login failure here, e.g., display an error message to the user.
        }
    };


    // const token = localStorage.getItem('accessToken')


    // useEffect(() => {
    //     if (token !== null) { // Token mavjud bo'lsa, sahifani avvalgi sahifaga qaytarish
    //         navigate('/');
    //     }
    // }, [token, navigate]);

    return (
        <>
            <form action="" onSubmit={submit}>
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
                                <input type='text' value={username} required onChange={e => setUsername(e.target.value)} name="Username" placeholder="Username:" />
                            </div>
                            <div className='Password'>
                                <label>Password:</label>
                                <input value={password} required onChange={e => setPassword(e.target.value)} type="password" name="Password" placeholder="Password:" />
                            </div>
                        </div>
                        <div className="Kirish">
                            <button type='submit'>Log In</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}