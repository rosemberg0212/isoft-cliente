import React from 'react'
import {FiMenu} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {useAuth} from '../../context/auth/authContext';

const Navbar = () => {
  const {autenticado,  cerrarSesion} = useAuth();
  return (
    <nav className='navbar'>
        <Link to='/' className='logo'>Logo</Link>
        <input type='checkbox' id='toggler'/>
        <label for='toggler'><FiMenu/></label>
        <div className='menu'>
        {
          autenticado ?(
            <ul className='list'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/'>Servicios</Link></li>
                <li><Link to='/'>Productos</Link></li>
                <li><Link to='/reservas'>Reservas</Link></li>
                <li><Link to='/'>Contacto</Link></li>
                <li><Link to='/signIn' onClick={cerrarSesion}>Cerrar Sesion</Link></li>
            </ul>
          ) : (<ul className='list'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/'>Servicios</Link></li>
                <li><Link to='/'>Productos</Link></li>
                <li><Link to='/reservas'>Reservas</Link></li>
                <li><Link to='/'>Contacto</Link></li>
                <li><Link to='/signIn'>Cuenta</Link></li>
            </ul>)
        }
            
        </div> 
    </nav>
  )
}

export default Navbar