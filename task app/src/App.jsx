import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ProfelInfo from './pages/ProfilInfo/ProfelInfo'
import User from './pages/User/User'
import TaskInfo from './pages/TaskINfo/TaskInfo'
import UserPage from './pages/UserPage/UserPage'
import { useEffect } from 'react';

function App() {

  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate()

  useEffect(() => {
      if (!token) {
          navigate('/login')
      }
  }, [token])

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Profil' element={<ProfelInfo />} />
          <Route path='/user' element={<User />} />
          <Route path='/TaskInfo' element={<TaskInfo />} />
          <Route path='/UserPage' element={<UserPage />} />
        </Routes>
    </>
  )


}

export default App
