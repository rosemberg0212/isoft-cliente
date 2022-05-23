import React, { useEffect } from 'react'
import CardServicios from '../../components/admin/CrearServicio'
import Sidebar from '../../components/admin/Sidebar'
import {useAuth} from '../../context/auth/authContext'

const Servicios = () => {
  const { usuarioAutenticado } = useAuth()

  useEffect(() => {
    usuarioAutenticado()
  }, [usuarioAutenticado])
  return (
    <div className='content-adm'>
        <Sidebar/>
        <div>
          <CardServicios/>
        </div>
    </div>
  )
}

export default Servicios