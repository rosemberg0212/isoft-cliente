import React from 'react'

const servicio = ({service}) => {
  return (
    <div className='service'>
        <img src={service.imgURL} alt='foto'/>
        <div className='text'>
            <p className='cecy'>CecyDates</p>
            <p className='nombre'>{service.nombre}</p>
        </div> 
    </div>
  )
}

export default servicio