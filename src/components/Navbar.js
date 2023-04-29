import React, { useState } from "react";
import {NavLink,Link} from "react-router-dom";
export default function Navbar(props) {
  const [show,setshow] = useState(false);
  return (
    <>
    <div className='flex justify-between items-center p-1' style={{backgroundColor:props.mode==='Light'?'#f09a54':'#5d5c61',color:props.mode==='Light'?'black':'white'}}>
    {show && <div className='z-10 absolute inset-0 top-[57px] h-[70px] transition-transform' style={{backgroundColor:props.mode==='Light'?'#f09a54':'#5d5c61',color:props.mode==='Light'?'black':'white'}}>
        <ul className="flex flex-col">
          <li className="p-2"onClick={()=>{setshow(!show)}}> <NavLink to="/">Home</NavLink></li>
          <li className="pb-2 pl-2" onClick={()=>{setshow(!show)}}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>}
      <div className="flex items-center pl-1">
          <button className="sm:visible items-center p-1 rounded-md md:hidden lg:hidden xl:hidden 2xl:hidden"onClick={()=>{setshow(!show)}}>
            <div className="bg-black w-5 h-[2px] m-1 border border-black "></div>
            <div className="bg-black w-5 h-[2px] m-1 border border-black"></div>
            <div className="bg-black w-5 h-[2px] m-1 border border-black"></div>
          </button>
          
        <div className="p-2 text-2xl font-bold"><Link to='/'>{props.title}</Link></div>
        <ul className="flex item-center">
          <li className="p-3 sm:hidden"> <NavLink to="/">Home</NavLink></li>
          <li className="p-3 sm:hidden"><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className="flex sm:relative space-x-2 items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer"onClick={props.toggleMode}/>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 "></div>
          <span className="ml-1 text-sm font-medium mr-3" >{props.mode === 'Light'?'Dark':'Light'}</span>
      </label>
      </div>
    </div>
    </>
  );
}
