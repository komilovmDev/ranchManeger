import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
      selectedFile: null,
      fileUrl: null, // Fayl URL si
    };
  }

  handleMessageChange = (e) => {
    this.setState({ newMessage: e.target.value });
  }

  handleFileChange = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  }

  sendMessage = () => {
    const { newMessage, selectedFile, messages } = this.state;
    
    const newMessageObj = {
      text: newMessage,
      file: selectedFile,
    };

    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessageObj],
      newMessage: '',
      selectedFile: null,
    }));

    if (selectedFile) {
      this.sendFile(selectedFile);
    }
  }

  sendFile = (file) => {
    // Faylni serverga yuborishni o'zgartiring
    // Faylning server tomonidan qabul qilinishi va URL ni olish

    // Misol: Fayl yuborildikdan so'ng, server qaytaradi:
    const serverFileUrl = 'https://example.com/uploads/your-file.pdf'; // Fayl URL si

    // Fayl URL sini saqlang
    this.setState({ fileUrl: serverFileUrl });
  }

  render() {
    return (
      <div>
        <div className="chat-box">
          {this.state.messages.map((message, index) => (
            <div key={index} className="message">
              {message.text}
              {message.file && (
                <div>
                  Fayl: <a href={this.state.fileUrl} target="_blank" rel="noopener noreferrer">{message.file.name}</a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="message-input">
          <input
            type="text"
            placeholder="Xabar kiritish..."
            value={this.state.newMessage}
            onChange={this.handleMessageChange}
          />
          <input type="file" onChange={this.handleFileChange} />
          <button onClick={this.sendMessage}>Yuborish</button>
        </div>
      </div>
    );
  }
}

export default Chat;
