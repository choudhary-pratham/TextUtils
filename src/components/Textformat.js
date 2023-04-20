import React, { useState } from 'react'

export default function Textformat() {

  const [textVal,setText] = useState('');

  const handleonChange = (event)=>{
    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    setText(textVal.toUpperCase());
  }
  const handleLoClick = ()=>{
    setText(textVal.toLowerCase());
  }
  const handleClsClick = ()=>{
    setText('');
  }

  const handleCapClick = ()=>{
    if(textVal !== ''){
      let newString = "";
      let words = textVal.split(' ');
      for(let i = 0;i<words.length;i++){
        newString += words[i][0].toUpperCase()+words[i].slice(1).toLowerCase();
        if(i!==words.length-1) newString += ' ';
      }
      setText(newString);
    }
  }

  return (
    <div className='flex flex-col'>
      <textarea className = "border border-black p-2 flex item-center m-auto mt-2" value={textVal} onChange={handleonChange} placeholder= "Enter your text here"cols="120" rows="15"></textarea>
      <div className="btn flex m-auto">
        <button className='p-2 m-2 bg-red-500 text-white rounded-md hover:bg-red-300 hover:text-black' onClick={handleUpClick}>Convert to upper case</button>
        <button className='p-2 m-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black' onClick={handleLoClick}>Convert to lower case</button>
        <button className='p-2 m-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black' onClick={handleCapClick}>Convert to Capitalize case</button>
        <button className='p-2 m-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black'>Convert to alternating case</button>
        <button className='p-2 m-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black' onClick={handleClsClick}>Clear</button>
      </div>
    </div>
  )
}
