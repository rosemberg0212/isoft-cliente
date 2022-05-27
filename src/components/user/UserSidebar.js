import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {BsJournalBookmark} from 'react-icons/bs'
import {FaRegWindowClose} from 'react-icons/fa'
import {useAuth} from '../../context/auth/authContext';
import foto from '../../img/user.png'

const UserSidebar = () => {

    const {cerrarSesion,autenticado, usuario} = useAuth();

   
  return (
    <div className='content-sidebarUser'>
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
            <Link to='/user'><AiOutlineHome/>Incio</Link>
        </li>
        <li>
            <Link to='/citasUser'><BsJournalBookmark/>Citas</Link>
        </li>
        <li>
            <Link to='/signIn' onClick={cerrarSesion}><FaRegWindowClose/>Cerrar sesión</Link>
        </li>
    </ul>
      </div> 
  )
}

export default UserSidebar