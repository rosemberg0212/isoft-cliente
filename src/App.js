import './sass/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reservas from './pages/Reservas'
import SignIN from './pages/SignIN'
import SignUP from './pages/SignUP'
import Navbar from './components/layout/Navbar'

//context
import AuthState from './context/auth/authState'


function App() {
  return (
    <AuthState>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservas' element={<Reservas />} />
          <Route path='/signIn' element={<SignIN />} />
          <Route path='/signUp' element={<SignUP />} />
        </Routes>
      </Router>
    </AuthState>
  )
}

export default App
