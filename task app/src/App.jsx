import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes , Navigate, useNavigate } from 'react-router-dom'
import Navbar from './companents/navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ProfelInfo from './pages/ProfilInfo/ProfelInfo'
import User from './pages/User/User'

function App() {

  // const navigate = useNavigate()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<User/>}/>
          <Route path='/' element={<Login />}/>
          <Route path='/Profil' element={<ProfelInfo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
