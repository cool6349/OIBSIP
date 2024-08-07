import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import Registration from './Components/Registration';
import './App.css';


function App() {

 
  return (
    <BrowserRouter>
    {/* <Loginpage/> */}
    
      <Routes>
      <Route path="/" element={< Loginpage/>} />
        <Route path='/login'
          element={<Loginpage />} />

        <Route path='/register'
          element={<Registration />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
