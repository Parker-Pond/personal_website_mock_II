import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
// PAGE IMPORTS (Normally this will be in an index.js but there are so few they are imported directly)
import Homepage from './components/homepage';
import NavBar from './components/navBar';
import About_me from './components/about_me/about_me';
import Contact_me from './components/contact_me/contact_me';

function App() {

  return (
    <>
      <NavBar/>

    {/* navigation bar goes here */}

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about_me" element={<About_me/>}/>
        <Route path="/contact_me" element={<Contact_me/>}/>
      </Routes>
    </>
  )
}

export default App
