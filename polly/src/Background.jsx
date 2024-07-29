import React from 'react'
import logo from "./assets/pollygpt.png";

const Background = () => {
  return (
    <div className='flex justify-center'>
    <div className="flex flex-col h-[30vh] w-1/2 bg-blue-500 justify-center items-center">
      <img src={logo} alt="Logo" className='w-32 h-32 mb-6' />
      <p className='font-mono font-blue-800'> Learn While Interacting </p>
    </div>
  </div>
  )
}

export default Background