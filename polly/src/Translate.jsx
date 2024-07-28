import React, { useState } from 'react';

const Translate = () => {
  const [inputValue, setInputValue] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputValue }),
      });

      if (response.ok) {
        const result = await response.json();
        setTranslatedText(result.translatedText); // Set the translated text
      } else {
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className='flex justify-center items-center h-[70vh] w-1/2 border-double border-4 border-black'>
        <div className="border-double border-4 border-gray-500 p-5 m-5 w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <input 
              type="text" 
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter text here..." 
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className=" p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Translate
            </button>
          </form>
          {translatedText && (
            <div className="mt-4 p-4 border border-gray-300 rounded-md">
              <h3 className="text-lg font-semibold">Translated Text:</h3>
              <p>{translatedText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Translate;
