import Navbar from "../../companents/navbar/Navbar";
import './ProfelInfo.css'
import ava from './../../assets/vod.png';
import { useState } from "react";

export default function ProfelInfo() {


    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };

    console.log(selectedFile);

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
                                <label htmlFor=""><input type="file" id="MyFile" /></label>
                                <input className="sobmit" type="submit" value="saqlash"/>
                                <div>
                                    <label htmlFor="fileInput" className="custom-file-upload">
                                        Image hare
                                    </label>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                    {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                                </div>
                                <input className="sobmit" type="submit" value="saqlash" />
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