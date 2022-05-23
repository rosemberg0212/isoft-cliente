import React, { useEffect } from 'react'
import CardCitas from '../../components/admin/CardCitas'
import Sidebar from '../../components/admin/Sidebar'
import {useAuth} from '../../context/auth/authContext'

const Citas = () => {
  const { usuarioAutenticado } = useAuth()

  useEffect(() => {
    usuarioAutenticado()
  }, [usuarioAutenticado])
  return (
    <div className='content-adm'>
        <Sidebar/>
        <div><CardCitas/></div>
    </div>
  )
}

export default Citas