import Navbar from "../../companents/navbar/Navbar";
import './ProfelInfo.css'
import ava from './../../assets/vod.png';
import { useState } from "react";

export default function ProfelInfo() {


    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (event) => {
          const imageUrl = event.target.result;
          setSelectedFile(file);
          setImageSrc(imageUrl);
        };
  
        reader.readAsDataURL(file);
      }
    };
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
                                    <img src={imageSrc || ava} alt="User's photo" />
                                </div>
                            </div>
                                <div className="InputPhoto">
                                    <label htmlFor="fileInput" className="custom-file-upload">
                                        Image 
                                    </label>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                    {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                                </div>
                            </div>
                        <div className="PersonalName">
                            <div className="NameName">
                                <p>
                                    NAME
                                </p>
                            </div>
                            <div className="NameText">
                                <input type="text" placeholder={"Muxammad Komilov"} />
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