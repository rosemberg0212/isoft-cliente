import './sass/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Reservas from './pages/Reservas'
import SignIN from './pages/SignIN'
import SignUP from './pages/SignUP'
import Navbar from './components/layout/Navbar'

// admin
import Admin from './pages/admin/Admin'
import Citas from './pages/admin/Citas'
import Info from './pages/admin/Info'
import Servicios from './pages/admin/Servicios'
import Usuarios from './pages/admin/Usuarios'

//user
import UserHome from './pages/user/UserHome'

//context
import AuthState from './context/auth/authState'
import CitasState from './context/citas/citasState'

import Modal from 'react-modal'

Modal.setAppElement('#root');


function App() {
  return (
    <AuthState>
      <CitasState>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservas' element={<Reservas />} />
            <Route path='/signIn' element={<SignIN />} />
            <Route path='/signUp' element={<SignUP />} />

            {/* admin */}
            <Route path='/admin' element={<Admin />} />
            <Route path='/citas' element={<Citas />} />
            <Route path='/info' element={<Info />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/usuarios' element={<Usuarios />} />

            {/* user */}
            <Route path='/user' element={<UserHome/>} />
          </Routes>
        </Router>
      </CitasState>
    </AuthState>
  )
}

export default App
