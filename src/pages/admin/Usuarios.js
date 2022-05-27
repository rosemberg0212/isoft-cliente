import React, { useEffect } from 'react'
import Content from '../../components/admin/Content'
import Sidebar from '../../components/admin/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth} from '../../context/auth/authContext'

const Usuarios = () => {
  const { usuarioAutenticado, getUsuarios } = useAuth()
  
  useEffect(() => {
    usuarioAutenticado()
    getUsuarios()
  }, [usuarioAutenticado, getUsuarios])
  return (
    <div className='content-adm'>
        <Sidebar/>
        <div><Content/></div>
    </div>
  )
}

export default Usuarios