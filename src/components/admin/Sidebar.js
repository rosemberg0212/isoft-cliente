import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsJournalBookmark} from 'react-icons/bs'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {FaRegWindowClose} from 'react-icons/fa'
import {useAuth} from '../../context/auth/authContext';
import foto from '../../img/user.png'


const Sidebar = () => {
    const {cerrarSesion,autenticado, usuario} = useAuth();
  return (
      <div className='content-sidebar'>
        <ul className='sidebar'>
        <li>
            {autenticado? (
                <div>
                    <div className='foto'>
                    <img src={foto} alt='perfil'/>
                    </div>
                    <p>Bienvenid@: {usuario.nombre}</p>
                </div>
            ): null}
            
        </li>
        <li>
            <Link to='/admin'><AiOutlineHome/>Incio</Link>
        </li>
        <li>
            <Link to='/usuarios'><FaUserAlt/>Usuarios</Link>
        </li>
        <li>
            <Link to='/citas'><BsJournalBookmark/>Citas</Link>
        </li>
        <li>
            <Link to='/servicios-admin'><RiCustomerService2Fill/>Servicios</Link>
        </li>
        <li>
            <Link to='/info'><MdOutlineMiscellaneousServices/>Info</Link>
        </li>
        <li>
            <Link to='/signIn' onClick={cerrarSesion}><FaRegWindowClose/>Cerrar sesión</Link>
        </li>
    </ul>
      </div> 
  )
}

export default Sidebar