import React from 'react'

export default function Navbar(props) {
  return (
    <div className='bg-teal-400 flex justify-between items-center'>
        <div>
            <ul className='flex'>
                <li className='p-3'>{props.title}</li>
                <li className='p-3'>Home</li>
                <li className='p-3'>About us</li>
            </ul>
        </div>
        <div className='flex'>
        <input className='h-8 w-52 p-2 rounded-md bg-slate-100' type="text" placeholder='search here'/>
        <button className='h-8 w-16 border border-blue-700 mx-3 bg-lime-500 rounded-md'>Search</button>
        </div>
    </div>
  )
}
