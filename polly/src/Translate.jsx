import React from 'react';

const Translate = () => {
  return (
    <div className="flex justify-center">
        <div className='flex flex-col justify-center items-center h-[70vh] w-1/2 border-double border-4 border-black'>
            <p>Text to Translate</p>
            <div className="p-5 m-5 w-full">
                <input 
                type="text" 
                placeholder="Enter text here..." 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    </div>
  );
}

export default Translate;
