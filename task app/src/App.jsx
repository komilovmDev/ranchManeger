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
import UserCards from './pages/UserPage/UserCards';
import UserTaskInfo from './pages/UserPage/UserTaskInfo';
import ErrorPage from './errorPage';

function App() {

  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token])

  const is_admin = localStorage.getItem('is_admin')


  // ======================================================================================================================================================


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />
        {
          is_admin == 'true' ? (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/Profil' element={<ProfelInfo />} />
              <Route path='/user' element={<User />} />
              <Route path='/TaskInfo/:id' element={<TaskInfo />} />
            </>
          ) : (
            <>
              <Route path='/UserTaskInfo/:id' element={<UserTaskInfo />} />
              <Route path='/Profil' element={<ProfelInfo />} />
              <Route path='/' element={<UserPage />} />
            </>
          )
        }
      </Routes>
    </>
  )
}

export default App
