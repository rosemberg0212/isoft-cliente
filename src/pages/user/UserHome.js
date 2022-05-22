import React, { useEffect } from 'react'
import Calendar from '../../components/citas/Calendar.js'

import UserSidebar from '../../components/user/UserSidebar'
import {useAuth} from '../../context/auth/authContext'

const UserHome = () => {
    const { usuarioAutenticado} = useAuth()

  useEffect(() => {
    usuarioAutenticado()
  }, [usuarioAutenticado])
  return (
    <div className='content-adm'>
        <UserSidebar/>
        <div className='calendario'>
          <h2 className='title'>Inicio</h2>
          <Calendar/>
        </div>
        
    </div>
  )
}

export default UserHome