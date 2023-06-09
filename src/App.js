import './App.css';
import Navbar from "./components/Navbar";
import Textformat from "./components/Textformat";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import Error from "./components/Error";
import React, { useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("Light");
  const [alert, setalert] = useState(null);

  const showAlert = (message)=>{
    setalert({
      msg:message,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'Light'){
      setmode('Dark');
      document.body.style.backgroundColor = '#211f26';
      showAlert("Dark Mode enabled!");
    }
    else{
      setmode('Light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled!");
    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
            <Route path="/" element={<Textformat mode = {mode} showAlert = {showAlert}/>}/>
            <Route path="/contact" element={<Contact mode={mode} showAlert = {showAlert}/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </>
  );
}

export default App;
