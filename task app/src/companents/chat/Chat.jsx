import React, { useEffect, useState } from 'react';
import './Chat.css';
import img from './../../assets/vod.png';
import axios from 'axios';

function Chat({card}) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const sendMessage = () => {
    const newMessageObj = {
      text: newMessage,
      file: selectedFile,
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
    setSelectedFile(null);

    if (selectedFile) {
      sendFile(selectedFile);
    }
  };

  const sendFile = (file) => {
    // Faylni serverga yuborishni o'zgartiring
    // Faylning server tomonidan qabul qilinishi va URL ni olish

    // Misol: Fayl yuborildikdan so'ng, server qaytaradi:
    const serverFileUrl = 'https://example.com/uploads/your-file.pdf'; // Fayl URL si

    // Fayl URL sini saqlang
    setFileUrl(serverFileUrl);
  };


  const tokenw = localStorage.getItem('accessToken');
  const getCommet = async () => {
    const response = await axios.get(`http://manager.zafarr.uz/routers/comments/card/${card.id}/`,
      {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Token ${tokenw}`,
        },
      }
    )
    setMessages(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    getCommet()
  }, [])



  return (
    <div className='ChatInfo'>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="user-name">
              <img src={img} alt="img" />
              <div className="TextComment">
                <p>Mukhammad Komilov</p>
                <p id='text'>{message.text}</p>
                {message.file && (
                  <div>
                    <a href={fileUrl} target="_blank" rel="noopener noreferrer">{message.file.name}</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <img src={img} alt="img" />
        <input className='Habar' type="text" placeholder="Xabar kiritish..." value={newMessage} onChange={handleMessageChange} />
        <input className='HabarFile' type="file" onChange={handleFileChange} />
        <button onClick={sendMessage}>Yuborish</button>
      </div>
    </div>
  );
}

export default Chat;
