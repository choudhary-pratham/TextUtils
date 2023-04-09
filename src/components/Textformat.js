import React from 'react'

export default function Textformat() {
  return (
    <div className='flex flex-col'>
      <textarea className = "border border-black p-2 flex item-center m-auto mt-2" placeholder= "Enter your text here"cols="120" rows="8"></textarea>
      <div className="btn flex m-auto">
        <button className='p-2 m-2 bg-red-500 text-white rounded-md hover:bg-red-300 hover:text-black'>Convert to upper case</button>
        <button className='p-2 m-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black'>Convert to lower case</button>
        <button className='p-2 m-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black'>Convert to Capitalize case</button>
        <button className='p-2 m-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black'>Convert to title case</button>
        <button className='p-2 m-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black'>Clear</button>
      </div>
    </div>
  )
}
