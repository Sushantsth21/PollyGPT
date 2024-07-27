import React from 'react';
import logo from "./assets/pollygpt.png";

const App = () => {
  return (
    <div className='flex justify-center'>
      <div className="flex h-[30vh] w-1/2 bg-blue-500 justify-center items-center">
        <img src={logo} alt="Logo" className='w-32 h-32' />
      </div>
    </div>
  );
};

export default App;
