import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useCitas} from '../../context/citas/citasContext'

const CardCitas = () => {
  const {obtenerCitas, citas} = useCitas()

    useEffect(() => {
     obtenerCitas()
     
        
    }, [obtenerCitas])
    
  return (
    <div className='card-servicios'>
    <h2>Registro de Citas</h2>
    <div className='card-ubica'>
    {citas.map(cita =>(
      <Card style={{ width: '18rem' }} className='carta' key={cita._id}>
        <Card.Body>
          <Card.Title>Tipo de servicio: {cita.title}</Card.Title>
          <Card.Text>
            Fecha: {cita.start}
          </Card.Text>
          <Card.Text>
            Estado: {cita.moment}
          </Card.Text>
          <Button variant="warning" className='war'>Editar</Button>
          <Button variant="danger">Borrar</Button>
        </Card.Body>
      </Card>
    ))}
    </div>
      
    </div>
  )
}

export default CardCitas