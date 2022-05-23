import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CardServicios = () => {
  return (
    <div className='card-servicios'>
        <h2>Registrar un nuevo Servicio</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese nombre" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Ingrese descripción" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tipo</Form.Label>
                <Form.Control type="text" placeholder="Ingrese tipo" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Crear
            </Button>
        </Form>
    </div>
  )
}

export default CardServicios