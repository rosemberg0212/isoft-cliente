import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {useAuth} from '../../context/auth/authContext'

const Content = () => {

    const { obtenerCitas } = useAuth()
    console.log(obtenerCitas)
    
  return (
    <div className='content-tabla'>
    <h2>Usuarios Registrados</h2>
    <Button variant="primary">Nuevo</Button>{' '}
        <Table striped bordered hover className='table'>
            <thead>
                <tr>
                <th>#id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>yulee</td>
                <td>yulee@gmail.com</td>
                <td>ADMIN_ROLE</td>
                <td>
                    <Button variant="warning">Editar</Button>{' '}
                    <Button variant="danger">Borrar</Button>{' '}
                </td>
                </tr>
                <tr>
                <td>2</td>
                <td>el rous</td>
                <td>elrous@gmail.com</td>
                <td>USER_ROLE</td>
                <td>
                <Button variant="warning">Editar</Button>{' '}
                    <Button variant="danger">Borrar</Button>{' '}
                </td>
                </tr>
                <tr>
                <td>3</td>
                <td>yuleidis</td>
                <td>yuli@gmail.com</td>
                <td>USER_ROLE</td>
                <td><Button variant="warning">Editar</Button>{' '}
                    <Button variant="danger">Borrar</Button>{' '}</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default Content