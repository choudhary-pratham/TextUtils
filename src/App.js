import './App.css';
import Navbar from "./components/Navbar";
import Textformat from "./components/Textformat";
import About from "./components/About";
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
            <Route path="/TextUtils" element={<Textformat mode = {mode} showAlert = {showAlert}/>}>
            <Route path="/TextUtils/about" element={<About mode={mode}/>}/>
            <Route path="/TextUtils/contact" element={<Contact mode={mode}/>}/>
            <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
