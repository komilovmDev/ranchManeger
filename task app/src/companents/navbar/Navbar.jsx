import './nav.css'
import rmIcon from '../../assets/rm.svg'


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navleft">
                <img src={rmIcon} alt="" />
                <h3>Ranch Meneger</h3>
            </div>
            <div className="navRight">
                <button className="userInfo">
                    <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
                    <h5>Muhammad Komilov</h5>
                </button>
            </div>
        </div>
    )
}