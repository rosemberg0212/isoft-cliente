import './sass/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Reservas from './pages/Reservas'
import SignIN from './pages/SignIN'
import SignUP from './pages/SignUP'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// admin
import Admin from './pages/admin/Admin'
import Citas from './pages/admin/Citas'
import Info from './pages/admin/Info'
import ServiciosAdmin from './pages/admin/Servicios'
import Usuarios from './pages/admin/Usuarios'

//user
import UserHome from './pages/user/UserHome'
import CitaUser from './pages/user/CitasUser'

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
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/reservas' element={<Reservas />} />
            <Route path='/signIn' element={<SignIN />} />
            <Route path='/signUp' element={<SignUP />} />

            {/* admin */}
            <Route path='/admin' element={<Admin />} />
            <Route path='/citas' element={<Citas />} />
            <Route path='/citas/:id' element={<Citas />} />
            <Route path='/info' element={<Info />} />
            <Route path='/servicios-admin' element={<ServiciosAdmin />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/usuarios/:id' element={<Usuarios />} />

            {/* user */}
            <Route path='/user' element={<UserHome/>} />
            <Route path='/citasUser' element={<CitaUser/>} />
            <Route path='/citasUser/:id' element={<CitaUser/>} />
          </Routes>
          <Footer/>
        </Router>
      </CitasState>
    </AuthState>
  )
}

export default App
