import React, { useEffect, useState } from 'react'
import { useCitas } from '../../context/citas/citasContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import ModalEdit from '../modal/Modal'
import Datetime from 'react-datetime';
import Modal from '../modal/Modal'

const CardCitasuser = () => {
    const { citasUser, borrarCita, obtenerCitasUser, crearCita } = useCitas()
    const [activeEdit, setactiveEdit] = useState(false)
    const [active, setactive] = useState(false)

    const [reservas, guardarReserva] = useState({

        title: '',
        descripcion: ''
    })
    const [start, setStart] = useState(new Date())
    const { title, descripcion } = reservas;

    const onChange = (e) => {
        guardarReserva({
            ...reservas,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        crearCita({
            title,
            start,
            descripcion
        })
    }

    const onSubmit2 = (e) => {
        e.preventDefault();

        
    }
    console.log(citasUser)
    useEffect(() => {
        obtenerCitasUser()
    }, [obtenerCitasUser])

    const toggle = () => {
        setactive(!active)
      }

    const toggleEdit = () => {
        // resetUser()
        setactiveEdit(!activeEdit)
    }

    //busqueda
    const [search, setSearch] = useState('')

    //funcion busqueda
    const searcher = (e) => {
        setSearch(e.target.value)

    }

    let results = !search ? citasUser : citasUser.filter((dato) => dato.moment.toLowerCase().includes(search.toLocaleLowerCase()))

    const params = useParams();

    useEffect(() => {

        const encontraU = citasUser.find((cita) => cita._id === params.id)
        console.log(encontraU)
        if (encontraU) {
            guardarReserva(encontraU)
            setStart(encontraU.start)
        }
        // setIditUser(encontraU)
    }, [params, citasUser])

    return (
        <div className='card-servicios'>

            <Modal active={active} toggleEdit={toggle}>
                <form className='content-modal' onSubmit={onSubmit2}>
                    <h2>Editar cita</h2>
                    <div className=''>
                        <div className=' orga'>
                            <label>Servicio(*)</label>
                            <select className='inputs ' name='title' value={title} onChange={onChange}>
                                <option>Selecciona una opci??n</option>
                                <optgroup label='CORTES Y BLOWER'>
                                    <option>Corte</option>
                                    <option>Corte + Blower</option>
                                    <option>Peinado + Blower</option>
                                    <option>Retoque + Blower</option>
                                    <option>Flequillo + Blower</option>
                                    <option>Flequillo</option>
                                    <option>Recogidos</option>
                                    <option>Arreglo de barba(m??quina)</option>
                                    <option>Arreglo de barba(pa??o-cuchilla-forma)</option>
                                    <option>Shampo</option>
                                </optgroup>
                                <optgroup label='Manicure y Pedicure'>
                                    <option>Retoque + Blower</option>
                                    <option>Manicure</option>
                                    <option>Hidrataci??n Parafina Manos</option>
                                    <option>Cambio de esmalte</option>
                                    <option>Manicure SPA</option>
                                    <option>Manicure Semipermanente(Pies o Manos)</option>
                                    <option>Maquillaje Encima Semipermanente(solo Pintado)</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className='fecha orga'>
                            <label>Fecha y Hora para el servicio (*)</label>
                            {/* <input 
                        type='datetime-local' 
                        className='campoF' 
                        min={fechaA} 
                        name='fecha'
                        value={fecha}
                        onChange={onChange}
                    /> */}
                            <Datetime value={start} onChange={date => setStart(date)} />
                        </div>
                    </div>

                    <input type='submit' name='enviar' className='ingresar' value='Editar' />
                </form>
            </Modal>

            <ModalEdit active={activeEdit} toggleEdit={toggleEdit}>
                <form className='content-modal' onSubmit={onSubmit}>
                    <h2>Registrar nueva cita</h2>
                    <div className=''>
                        <div className=' orga'>
                            <label>Servicio(*)</label>
                            <select className='inputs ' name='title' value={title} onChange={onChange}>
                                <option>Selecciona una opci??n</option>
                                <optgroup label='CORTES Y BLOWER'>
                                    <option>Corte</option>
                                    <option>Corte + Blower</option>
                                    <option>Peinado + Blower</option>
                                    <option>Retoque + Blower</option>
                                    <option>Flequillo + Blower</option>
                                    <option>Flequillo</option>
                                    <option>Recogidos</option>
                                    <option>Arreglo de barba(m??quina)</option>
                                    <option>Arreglo de barba(pa??o-cuchilla-forma)</option>
                                    <option>Shampo</option>
                                </optgroup>
                                <optgroup label='Manicure y Pedicure'>
                                    <option>Retoque + Blower</option>
                                    <option>Manicure</option>
                                    <option>Hidrataci??n Parafina Manos</option>
                                    <option>Cambio de esmalte</option>
                                    <option>Manicure SPA</option>
                                    <option>Manicure Semipermanente(Pies o Manos)</option>
                                    <option>Maquillaje Encima Semipermanente(solo Pintado)</option>
                                </optgroup>
                            </select>
                        </div>

                        <div className='fecha orga'>
                            <label>Fecha y Hora para el servicio (*)</label>
                            {/* <input 
                        type='datetime-local' 
                        className='campoF' 
                        min={fechaA} 
                        name='fecha'
                        value={fecha}
                        onChange={onChange}
                    /> */}
                            <Datetime value={start} onChange={date => setStart(date)} />
                        </div>

                        <div className='comenta orga'>
                            <label>Comentario</label>
                            <input
                                type='text'
                                className='inputs coment'
                                name='descripcion'
                                value={descripcion}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <input type='submit' name='enviar' className='ingresar' value='Crear' />
                </form>
            </ModalEdit>
            <h1>Registro de citas</h1>
            <Button variant="primary" onClick={toggleEdit}>Nuevo</Button>{' '}
            <div className='buscador'>
                <label>Filtrar por estado de la cita</label>
                <input value={search} onChange={searcher} type='text' placeholder='search' className='search' />
            </div>
            <div className='card-ubica'>
                {results.map(cita => (
                    <Card style={{ width: '18rem' }} className='carta' key={cita._id}>
                        <Card.Body>
                            <Card.Title>Tipo de servicio: {cita.title}</Card.Title>
                            <Card.Text>
                                Fecha: {cita.start}
                            </Card.Text>
                            <Card.Text>
                                Estado: {cita.moment}
                            </Card.Text>
                            <Card.Text>
                                Usuario: {cita.usuario.nombre}
                            </Card.Text>
                            <Link to={`/citasUser/${cita._id}`} className='btn-editar'>
                                <Button variant="warning" onClick={toggle} >Editar</Button>{' '}
                            </Link>

                            <Button variant="danger" onClick={() => borrarCita(cita._id)}>Borrar</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>


    )
}

export default CardCitasuser