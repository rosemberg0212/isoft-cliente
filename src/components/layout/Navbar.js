import React from 'react'
import {FiMenu} from 'react-icons/fi';
import {FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useAuth} from '../../context/auth/authContext';

const Navbar = () => {
  const {autenticado, usuario} = useAuth();
  return (
    <nav className='navbar'>
        <Link to='/' className='logo'>CECYDATES</Link>
        <input type='checkbox' id='toggler'/>
        <label for='toggler'><FiMenu/></label>
        <div className='menu'>
        {
          autenticado ?(
            usuario?.rol === 'ADMIN_ROLE' ? (
              <ul className='list'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/reservas'>Reservas</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/user'><FaUserCircle className='user'/></Link></li>
                {/* <li><Link to='/signIn' onClick={cerrarSesion}>Cerrar Sesion</Link></li> */}
            </ul>
            ) : ( <ul className='list'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/reservas'>Reservas</Link></li>
                <li><Link to='/user'><FaUserCircle className='user'/></Link></li>
                {/* <li><Link to='/signIn' onClick={cerrarSesion}>Cerrar Sesion</Link></li> */}
            </ul>)
           
          ) : (<ul className='list'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/reservas'>Reservas</Link></li>
                <li><Link to='/signIn'>Cuenta</Link></li>
            </ul>)
        }
            
        </div> 
    </nav>
  )
}

export default Navbar