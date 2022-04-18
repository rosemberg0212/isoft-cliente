import './sass/main.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Sign_in from './pages/Sign_in';
import Sign_up from './pages/Sign_up';

//context
import AuthState from './context/auth/authState';

function App() {
  return (
    <AuthState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<Sign_in/>}/>
          <Route path='/signUp' element={<Sign_up/>}/>
        </Routes>
      </Router>
    </AuthState>
    
  );
}

export default App;
