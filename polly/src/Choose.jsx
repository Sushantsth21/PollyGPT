import React from 'react';
import { Link } from 'react-router-dom';

const Choose = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center items-center flex-col h-[70vh] w-1/2 border-double border-4 border-black'>
        <Link
          to="/translate"
          className="bg-blue-500 text-white text-xl font-bold py-4 px-8 rounded mb-4 hover:bg-blue-700 hover:text-gray-300 transition-colors duration-300"
        >
          Translate
        </Link>
        <Link
          to="/chat"
          className="bg-green-500 text-white text-xl font-bold py-4 px-8 rounded hover:bg-green-700 hover:text-gray-300 transition-colors duration-300"
        >
          Chat
        </Link>
      </div>
    </div>
  );
};

export default Choose;
