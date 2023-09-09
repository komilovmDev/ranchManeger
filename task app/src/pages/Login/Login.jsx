import './Login.css';
import logo from './../../assets/rm.svg';
import { Link } from 'react-router-dom';

export default function Login() {
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
                            <input type="username" name="Username" placeholder="Username"/>
                        </div>
                        <div className='Password'>
                            <label>Password:</label>
                            <input type="password" name="Password" placeholder="Password:"/>
                        </div>
                    </div>
                    <div className="Kirish">
                    <Link to={"/home"}>
                        <button>
                            Kirish
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}