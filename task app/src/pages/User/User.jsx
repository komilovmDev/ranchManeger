import Navbar from "../../companents/navbar/Navbar";
import './User.css';
import ava from './../../assets/vod.png';


export default function User() {
    return (
        <>
            <Navbar/>
            <div className="User">
                <div className="UserTitle">
                    <h1>
                        All Boards
                    </h1>
                </div>
                <div className="UserCardBox">
                    <div className="UserCard">
                        <div className="boximgtype"></div>
                        <div className="Teaxt">
                            <p>Admin</p>
                        </div>
                        <div className="UserImg">
                            <img src={ava} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}