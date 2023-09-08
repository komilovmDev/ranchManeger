import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes , Navigate, useNavigate } from 'react-router-dom'
import Navbar from './companents/navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {

  // const navigate = useNavigate()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
