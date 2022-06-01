import React, { useEffect } from 'react'
import { useAuth } from '../context/auth/authContext'
import { Link } from 'react-router-dom'


const Home = () => {
  const { usuarioAutenticado } = useAuth()


  useEffect(() => {
    usuarioAutenticado()
  }, [usuarioAutenticado])

  return (
    <div>
      <div className='fondo'>
        <div className='titulo'>
          <p>La mejor peluquería de Cartagena</p>
          <Link to='/reservas'>
            <button>Reserva tu cita</button>
          </Link>
        </div>
      </div>
      <div className='nosotros'>
        <div className='presentacion'>
          <p>“Somos un equipo íntegro y especializado, experto en corte, color y servicios suplementarios, generando múltiples beneficios complementarios al momento en que nos visites.”</p>
        </div>
        <div className='equipo'>
          <p className='title'>Un equipo especializado</p>
          <p className='descrip'>No sólo hacemos lo mejor para tu cabello, sino que trabajamos con los mejores. Nuestro equipo ha sumado toda su experiencia y conocimiento para entregarte en cada cita, años de práctica y calidad. El servicio y la calidad de todo nuestro equipo de trabajo nos hacen únicos en cada zona donde llegamos.</p>
        </div>
      </div>
    </div>

  )
}

export default Home
