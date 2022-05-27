import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useCitas } from '../../context/citas/citasContext'
import ModalEdit from '../modal/Modal'
// import Datetime from 'react-datetime';
import { Link, useParams } from 'react-router-dom'

const CardCitas = () => {
  const { obtenerCitas, citas, borrarCita, editarCita } = useCitas()
  const [activeEdit, setactiveEdit] = useState(false)

  const [reservas, guardarReserva] = useState({
    _id: '',
    title: '',
    descripcion: '',
    moment: '',
    usuario: ''
  })
  const [start, setStart] = useState(new Date())

  const { _id, title, descripcion, moment, usuario } = reservas;

  const onChange = (e) => {
    guardarReserva({
      ...reservas,
      [e.target.name]: e.target.value
    });
  }

  const params = useParams();

  useEffect(() => {

    const encontraU = citas.find((cita) => cita._id === params.id)
    console.log(encontraU)
    if (encontraU) {
      guardarReserva(encontraU)
      setStart(encontraU.start)
    }
    // setIditUser(encontraU)
  }, [params, citas])


  const onSubmit = (e) => {
    e.preventDefault();

    // crearCita({
    //     title,
    //     start,
    //     descripcion
    // })
    editarCita({
      ...reservas,
      _id,
      title,
      start,
      descripcion,
      moment,
      usuario
    })
  }

  useEffect(() => {
    obtenerCitas()
  }, [obtenerCitas])



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

  let results = !search ? citas : citas.filter((dato) => dato.usuario.nombre.toLowerCase().includes(search.toLocaleLowerCase()))


  return (
    <div className='card-servicios'>
      <h2>Registro de Citas</h2>
      <div className='buscador'>
        <label>Filtrar por nombre</label>
        <input value={search} onChange={searcher} type='text' placeholder='search' className='search' />
      </div>
      <ModalEdit active={activeEdit} toggleEdit={toggleEdit}>
        <form onSubmit={onSubmit} className='content-modal-citas'>
          <div className='ubica'>
            <h2>Editar el estado de la cita</h2>
            <div className='servi orga'>
              <label>Servicio(*)</label>
              <select className='inputs' name='title' value={reservas.title} onChange={onChange} disabled>
                <option>Selecciona una opción</option>
                <optgroup label='CORTES Y BLOWER'>
                  <option>Corte</option>
                  <option>Corte + Blower</option>
                  <option>Peinado + Blower</option>
                  <option>Retoque + Blower</option>
                  <option>Flequillo + Blower</option>
                  <option>Flequillo</option>
                  <option>Recogidos</option>
                  <option>Arreglo de barba(máquina)</option>
                  <option>Arreglo de barba(paño-cuchilla-forma)</option>
                  <option>Shampo</option>
                </optgroup>
                <optgroup label='Manicure y Pedicure'>
                  <option>Retoque + Blower</option>
                  <option>Manicure</option>
                  <option>Hidratación Parafina Manos</option>
                  <option>Cambio de esmalte</option>
                  <option>Manicure SPA</option>
                  <option>Manicure Semipermanente(Pies o Manos)</option>
                  <option>Maquillaje Encima Semipermanente(solo Pintado)</option>
                </optgroup>
              </select>
            </div>


            <div className='comenta orga'>
              <label>Estado de la cita</label>
              <input
                type='text'
                className='inputs'
                name='moment'
                value={reservas.moment}
                onChange={onChange}
              />
            </div>

            <div className='comenta orga'>
              <label>Usuario</label>
              <input
                type='text'
                className='inputs'
                name='usuario'
                value={reservas.usuario.nombre}
                onChange={onChange}
                disabled
              />
            </div>

          </div>
          <input type='submit' name='enviar' className='ingresar' value='Editar' />
        </form>
      </ModalEdit>
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
              <Link to={`/citas/${cita._id}`} className='btn-editar'>
                <Button variant="warning" onClick={toggleEdit}>Editar</Button>{' '}
              </Link>

              <Button variant="danger" onClick={() => borrarCita(cita._id)}>Borrar</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

    </div>
  )
}

export default CardCitas