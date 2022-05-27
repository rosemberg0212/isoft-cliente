import React, { useEffect } from 'react'
import {useAuth} from '../context/auth/authContext'
import foto from '../img/20945780.jpg'


const Home = () => {
  const { usuarioAutenticado } = useAuth()
  

  useEffect(() => {
    usuarioAutenticado()
  }, [usuarioAutenticado])
    
  return (
    <div className='fondo'>
      <h1>Pagina en mantenimiento</h1>
      <img src={foto} alt='fondo'/>
    </div>
  )
}

export default Home
