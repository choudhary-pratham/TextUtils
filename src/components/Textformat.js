import React, { useState } from 'react'

export default function Textformat(props) {

  const [textVal,setText] = useState('');

  const handleonChange = (event)=>{
    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    let newString = textVal.toUpperCase();
    setText(newString);
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
        if(words[i][0] !== undefined) newString += words[i][0].toUpperCase()+words[i].slice(1).toLowerCase();
        if(i!==words.length-1) newString += ' ';
      }
      setText(newString);
    }
  }
  const handleAltClick = ()=>{
    if(textVal !== ''){
      let newString = "";
      let words = textVal.split(' ');
      for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
          if(j%2===0 && words[i][j]!==' ') newString += words[i][j].toLowerCase();
          else if(j%2!==0 && words[i][j]!==' ') newString += words[i][j].toUpperCase();
        }
        if(i!==words.length-1) newString += ' ';
      }
      setText(newString);
    }
  }

  let handlecopy = ()=>{
      navigator.clipboard.writeText(textVal)
      props.showAlert("Text copied to clipboard!")
    }
  let handleExtraSpaces = ()=>{
      const arr = textVal.split(/[ ]+/);
      setText(arr.join(" "));
    }
  
    
  return (
      <div className='flex flex-col w-[55%] sm:w-[90%] m-auto' style={{color:props.mode==='Light'?'black':'white'}} >
          <textarea className = 'border border-black p-2 flex item-center mt-2 text-black' value={textVal} onChange={handleonChange} placeholder= "Enter your text here" rows={15} style={{backgroundColor: props.mode==='Light'?'white':'#c0b4d9'}}></textarea >
        <div className="btn flex flex-wrap">
          <button className='pt-3 pb-3 pr-2 pl-2 mt-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-300 hover:text-black border-2  border-amber-700 sm:text-sm lg:text-lg' disabled={textVal.length === 0} onClick={handleUpClick}>UPPERCASE</button>
          <button className='pt-3 pb-3 pr-2 pl-2 mt-2 mr-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black border-2 border-amber-700 sm:text-sm lg:text-lg' disabled={textVal.length === 0} onClick={handleLoClick}>lowercase</button>
          <button className='pt-3 pb-3 pr-2 pl-2 mt-2 mr-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black border-2 border-amber-700 sm:text-sm lg:text-lg' disabled={textVal.length === 0} onClick={handleCapClick}>CapitalizeCase</button>
          <button className='pt-3 pb-3 pr-2 pl-2 mt-2 mr-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black border-2 border-amber-700 sm:text-sm lg:text-lg' disabled={textVal.length === 0} onClick={handleAltClick}>aLtErNaTiNgCaSe</button>
          <button className='pt-3 pb-3 pr-2 pl-2 mt-2 mr-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black border-2 border-amber-700 sm:text-sm lg:text-lg' disabled={textVal.length === 0} onClick={handlecopy}>CopyTextToClipboard</button>
          <button className='pt-3 pb-3 pr-2 pl-2 mt-2 mr-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black border-2 border-amber-700 sm:text-sm lg:text-lg' disabled={textVal.length === 0} onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
          <button className='pt-3 pb-3 pr-2 pl-2 mt-2 mr-2 bg-red-500 text-white rounded-md  hover:bg-red-300 hover:text-black border-2 border-amber-700 sm:text-sm lg:text-lg' disabled={textVal.length === 0} onClick={handleClsClick}>clear</button>
          
        </div>
        <div className='count flex mb-2 '>
          <div className='pr-2 font-bold'>{textVal.split(/\s+/).filter((element)=>{return element.length!==0;}).length} words and</div>
          <div className='font-bold'>{textVal.length} characters</div>
        </div>
        <div className='prev text-2xl font-bold'>Preview</div>
        <p>{textVal.length === 0?"Nothing to preview":textVal}</p>
      </div>
  )
}
