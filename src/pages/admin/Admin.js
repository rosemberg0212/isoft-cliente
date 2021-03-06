import React, { useEffect } from 'react'
import Sidebar from '../../components/admin/Sidebar.js'
import Calendar from '../../components/citas/Calendar.js'
import {useAuth} from '../../context/auth/authContext'

const Admin = () => {
  const { usuarioAutenticado } = useAuth()

  useEffect(() => {
    usuarioAutenticado()
  }, [usuarioAutenticado])
  return (
    <div className='content-adm'>
        <Sidebar/>
        <div className='calendario'>
          <h2 className='title'>Inicio</h2>
          <Calendar/>
        </div>
        
    </div>
  )
}

export default Admin