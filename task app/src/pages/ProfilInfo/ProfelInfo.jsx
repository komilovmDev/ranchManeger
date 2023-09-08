import Navbar from "../../companents/navbar/Navbar";
import './ProfelInfo.css'
import ava from './../../assets/vod.png';

export default function ProfelInfo() {
    return (
        <>
            <div className="ProfelInfo">
                <Navbar />
                <div className="PersolalContainer">
                    <div className="PersonalTitle">
                        <h1>
                            Personal Info
                        </h1>
                    </div>
                    <div className="PersonalInfoBox">
                        <div className="PersonalPhoto">
                            <div className="NamePhoto">
                                <p>
                                    PHOTO
                                </p>
                            </div>
                            <div className="ImgPhoto">
                                <div className="ImgPhotoBox">
                                    <img src={ava} alt="" />
                                </div>
                            </div>
                            <div className="InputPhoto">
                                <input type="file" id="MyFile" />
                                <input className="sobmit" type="submit" value="saqlash"/>
                            </div>
                        </div>
                        <div className="PersonalName">
                            <div className="NameName">
                                <p>
                                    NAME
                                </p>
                            </div>
                            <div className="NameText">
                                <p>
                                    Muhammad Komilov
                                </p>
                            </div>
                        </div>
                        <div className="PersonalAdress">
                            <div className="AdressName">
                                <p>
                                    ADDRESS
                                </p>
                            </div>
                            <div className="AdressEmail">
                                <p>
                                    komilovm.dev@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}