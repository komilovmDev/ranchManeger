import './App.css'
import { BrowserRouter, Route, Routes , } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ProfelInfo from './pages/ProfilInfo/ProfelInfo'

function App() {

  // const navigate = useNavigate()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/Profil' element={<ProfelInfo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
