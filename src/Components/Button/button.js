import React from 'react'

export default function Button({text, handleClick, disabled}) {
  return (
    <div className='p-2'>
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            disabled={disabled}
            onClick={handleClick}
        >
            {text}
        </button>
    </div>
)}
