import React, { useEffect } from 'react'
import CardCitasuser from '../../components/user/CardCitasuser'
import UserSidebar from '../../components/user/UserSidebar'
import {useAuth} from '../../context/auth/authContext'

const  CitaUser = () => {
    const { usuarioAutenticado } = useAuth()

    useEffect(() => {
      usuarioAutenticado()
    }, [usuarioAutenticado])
    return (
      <div className='content-adm'>
          <UserSidebar/>
          <div><CardCitasuser/></div>
      </div>
    )
}

export default CitaUser