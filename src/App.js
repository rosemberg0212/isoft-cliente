import './sass/main.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIN from './pages/SignIN';
import SignUP from './pages/SignUP';

//context
import AuthState from './context/auth/authState';

function App() {
  return (
    <AuthState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<SignIN/>}/>
          <Route path='/signUp' element={<SignUP/>}/>
        </Routes>
      </Router>
    </AuthState>
    
  );
}

export default App;
