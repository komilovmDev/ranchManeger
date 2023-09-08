import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './companents/navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Page' element={<Home/>}/>
          <Route path='/' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
