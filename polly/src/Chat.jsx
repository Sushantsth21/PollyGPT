import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = async () => {
    if (inputValue.trim() !== '') {
      const newMessage = { text: inputValue, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputValue('');
      setError(null);

      try {
        const response = await fetch('http://localhost:3000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: inputValue }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        setMessages(prevMessages => [
          ...prevMessages,
          { text: data.response, sender: 'bot' }
        ]);
      } catch (error) {
        console.error('Error sending message:', error);
        setError('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col h-[70vh] w-1/2 border-double border-4 border-black">
        <Link to="/" className="absolute top-0 left-0 p-2 m-2 bg-red-300 border border-gray-300 rounded-md">Back</Link>
        <div className="flex flex-grow flex-col p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-md ${message.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex p-2 border-t border-gray-300">
          <input 
            type="text" 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type a message..." 
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <button 
            onClick={handleSend}
            className={`ml-2 p-2 bg-blue-500 text-white rounded-md ${!inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            disabled={!inputValue.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
