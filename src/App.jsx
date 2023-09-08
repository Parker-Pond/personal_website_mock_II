import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
// PAGE IMPORTS (Normally this will be in an index.js but there are so few they are imported directly)
import Homepage from './components/homepage';
import NavBar from './components/navBar';

function App() {

  return (
    <>
      <NavBar/>

    {/* navigation bar goes here */}

      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
