import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import ModalEdit from '../modal/Modal'
import {  useService } from '../../context/services/serviceContext'

const CardServicios = () => {
    const {servicios, obtenerServicios, crearServicio} = useService();
    useEffect(() => {
        obtenerServicios()
    }, [obtenerServicios])
    
    const [activeEdit, setactiveEdit] = useState(false)
    const [servicio, setServicio] = useState({
        _id: '',
        nombre: '',
        descripcion: '',
    })

    const [image, setimage] = useState()

    const { nombre, descripcion, } = servicio;

    const onChange = (e) => {
        setServicio({
            ...servicio,
            [e.target.name]: e.target.value,
        })
    }

    const onFile = (e) => {
        setimage(e.target.files[0])

        console.log(e.target.files[0])
    }

    const toggleEdit = () => {
        setactiveEdit(!activeEdit)
    }

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion)
    formData.append('image', image)
    

    const onSubmit = (e) => {
        e.preventDefault();

        crearServicio(formData)
    }

    return (
        <div className='card-servicios'>
            <h2>Registrar un nuevo Servicio</h2>
            <Button variant="primary" onClick={toggleEdit}>Nuevo</Button>{' '}
            <ModalEdit active={activeEdit} toggleEdit={toggleEdit}>
                <form className='content-modal' onSubmit={onSubmit} enctype="multipart/form-data">
                    <p>Crear nuevo servicio</p>
                    <div className='inputs'>
                        <div className='name org'>
                            <label>Nombre:</label>
                            <input
                                type='text'
                                className='nombre'
                                id='nombre'
                                name='nombre'
                                value={nombre}
                                onChange={onChange}
                            />
                        </div>

                        <div className='mail org'>
                            <label>Descripcion</label>
                            <textarea
                                id='descripcion'
                                name='descripcion'
                                value={descripcion}
                                onChange={onChange}
                            />
                        </div>

                        <div className='passw org'>
                            <label>Foto:</label>
                            <input
                                type='file'
                                className='file'
                                id='file'
                                name='image'
                                onChange={onFile}
                                accept="image/*"
                            />
                        </div>

                    </div>
                    <input type='submit' value='Crear' className='ingresar' />
                </form>
            </ModalEdit>
        </div>
    )
}

export default CardServicios