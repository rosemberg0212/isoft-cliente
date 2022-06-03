import React, { useEffect } from 'react'
import Servicio from './Servicio'
import {  useService } from '../../context/services/serviceContext'

const ListaServicios = () => {
    const {servicios, obtenerServicios} = useService();
    useEffect(() => {
        obtenerServicios()
    }, [obtenerServicios])

  return (
    <div className='content-listaServicio'>
        <h1 className='title'>Servicios</h1>
        <p>Somos un equipo íntegro y especializado, experto en corte, color y servicios complementarios al momento en que visites Cecy.</p>
        <div className='flex-c'>
            {servicios.map(service=>(
                <Servicio
                    service={service}
                    key={service._id}
                />
            ))}
            
            
        </div>
    </div>
  )
}

export default ListaServicios