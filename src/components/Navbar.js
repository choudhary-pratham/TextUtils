import React from "react";
import {NavLink,Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <div className='flex justify-between items-center sm:flex-col md:flex-col' style={{backgroundColor:props.mode==='Light'?'#f09a54':'#5d5c61',color:props.mode==='Light'?'black':'white'}}>
      <div className="flex items-center sm:flex-col md:flex-col">
        <div className="p-2 text-2xl font-bold"><Link to='/'>{props.title}</Link></div>
        <ul className="flex item-center">
          <li className="p-3"> <NavLink to="/TextUtils">Home</NavLink></li>
          <li className="p-3"><NavLink to="/TextUtils/about">About</NavLink></li>
          <li className="p-3"><NavLink to="/TextUtils/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className="flex sm:mb-2 sm:relative space-x-2 items-center">
        {/* <input
          className="h-8 w-48 p-2 rounded-md bg-slate-100 text-black"
          type="text"
          placeholder="search here"
        />
        <button className="h-8 w-16 border border-blue-700 bg-lime-500 rounded-md">
          Search
        </button> */}
        <button className="rounded-full bg-black h-8 w-8 border-2 border-black"></button>
        <button className="rounded-full bg-blue-900 h-8 w-8 border-2 border-black"></button>
        <button className="rounded-full bg-green-900 h-8 w-8 border-2 border-black"></button>
        <button className="rounded-full bg-red-900 h-8 w-8 border-2 border-black"></button>
        <label className="relative inline-flex items-center cursor-pointer sm:absolute sm:left-[160px] sm:bottom-[95px]">
          <input type="checkbox" value="" className="sr-only peer"onClick={props.toggleMode}/>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 "></div>
          <span className="ml-1 text-sm font-medium mr-3" >{props.mode === 'Light'?'Dark':'Light'}</span>
      </label>
      </div>
    </div>
  );
}
