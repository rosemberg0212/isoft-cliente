import React, { useEffect } from 'react'
import CardCitas from '../../components/admin/CardCitas'
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
          <div><CardCitas/></div>
      </div>
    )
}

export default CitaUser