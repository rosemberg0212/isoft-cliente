import React, { useEffect } from 'react'
import Citas from '../components/citas/Citas'
import {useAuth} from '../context/auth/authContext'

const Reservas = () => {
  const { usuarioAutenticado } = useAuth()

  useEffect(() => {
    usuarioAutenticado()
  }, [usuarioAutenticado])

  return (
    <div><Citas/></div>
  )
}

export default Reservas