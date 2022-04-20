import React, { useEffect } from 'react'
import {useAuth} from '../context/auth/authContext'

const Home = () => {
  const { usuarioAutenticado } = useAuth()

  useEffect(() => {
    usuarioAutenticado()
  }, [usuarioAutenticado])
    
  return (
    <div>
      home
    </div>
  )
}

export default Home
