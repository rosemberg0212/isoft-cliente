import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useAuth } from '../../context/auth/authContext'
import Modal from '../modal/Modal'
import ModalEdit from '../modal/Modal'
import { Link, useParams } from 'react-router-dom'

const Content = () => {

  const { usuarios, deleteUser, putUser, setUser, resetUser, setIditUser, crearUsuarioModal } = useAuth()
  const params = useParams();

  const [active, setactive] = useState(false)
  const [activeEdit, setactiveEdit] = useState(false)
  const [user, setUsuario] = useState({
    _id: '',
    nombre: '',
    correo: '',
    password: '',
    rol: '',
    celular: ''
  })

  //busqueda
  const [search, setSearch] = useState('')

  //funcion busqueda
  const searcher = (e)=>{
    setSearch(e.target.value)
    
  }

  //metodo filtrado
  // let results = [];
  // if(!search){
  //   results = usuarios
  // }else{
  //   results = usuarios.filter((dato)=>
  //     dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
  //     )
  // }

  let results = !search ? usuarios : usuarios.filter((dato)=>dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))


  const { _id, nombre, correo, rol, celular, password } = user

  const onChange = (e) => {
    setUsuario({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const toggle = () => {
    setactive(!active)
  }

  const nuevo = () => {
    resetUser()
    setUsuario({
      _id: '',
      nombre: '',
      correo: '',
      rol: '',
      celular: '',
      password: ''
    })
    toggleEdit()
  }

  const toggleEdit = () => {
    resetUser()
    setactiveEdit(!activeEdit)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (setUser) {
      putUser({
        ...user,
        _id,
        nombre,
        correo,
        rol,
        celular
      })
    } else {
      crearUsuarioModal({
        nombre,
        correo,
        rol,
        celular,
        password
      })
    }
  }

  useEffect(() => {
    if (setUser) {
      setUsuario(setUser);
    }
    else {
      setUsuario({
        _id: '',
        nombre: '',
        correo: '',
        rol: '',
        celular: '',
        password: ''
      })
    }
  }, [setUser])


  useEffect(() => {

    const encontraU = usuarios.find((user) => user._id === params.id)
    // console.log(encontraU)
    if (encontraU) {
      setUsuario(encontraU)
    }
    setIditUser(encontraU)
  }, [params, usuarios, setIditUser])

  let num = 1;

  
  return (
    <div className='content-tabla'>
      <h2>Usuarios Registrados</h2>
      <Button variant="primary" onClick={nuevo}>Nuevo</Button>{' '}

      <div className='buscador'>
        <label>Filtrar por nombre</label>
        <input value={search} onChange={searcher} type='text' placeholder='search' className='search'/>
      </div>

      <Modal active={active} toggle={toggle}>
        <form className='content-modal' onSubmit={onSubmit}>
          <p>Registar nuevo usuario</p>
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
              <label>Correo</label>
              <input
                type='email'
                className='email'
                id='email'
                name='correo'
                value={correo}
                onChange={onChange}
              />
            </div>

            <div className='passw org'>
              <label>Rol:</label>
              <input
                type='text'
                className='rol'
                id='rol'
                name='rol'
                value={rol}
                onChange={onChange}
              />
            </div>

            <div className='celu org'>
              <label>Celular:</label>
              <input
                type='text'
                className='celular'
                id='celular'
                name='celular'
                value={celular}
                onChange={onChange}
              />
            </div>
          </div>

          <input type='submit' value='Registrar' className='ingresar' />
        </form>
      </Modal>


      <ModalEdit active={activeEdit} toggleEdit={toggleEdit}>
        <form className='content-modal' onSubmit={onSubmit}>
          <p>{setUser ? 'Editar datos de los usuarios' : 'Crear nuevo usuario'}</p>
          {setUser ? (
            <div className='inputs'>
              <div className='name org'>
                <label>Nombre:</label>
                <input
                  type='text'
                  className='nombre'
                  id='nombre'
                  name='nombre'
                  value={user.nombre}
                  onChange={onChange}
                />
              </div>
              <div className='mail org'>
                <label>Correo</label>
                  <input
                    type='email'
                    className='email'
                    id='email'
                    name='correo'
                    value={user.correo}
                    onChange={onChange}
                    disabled
                  />
              </div>

              <div className='passw org'>
                <label>Rol:</label>
                <input
                  type='text'
                  className='rol'
                  id='rol'
                  name='rol'
                  value={user.rol}
                  onChange={onChange}
                />
              </div>

              <div className='celu org'>
                <label>Celular:</label>
                <input
                  type='text'
                  className='celular'
                  id='celular'
                  name='celular'
                  value={user.celular}
                  onChange={onChange}
                />
            </div>
          </div>
          ) : (
            <div className='inputs'>
              <div className='name org'>
                <label>Nombre:</label>
                <input
                  type='text'
                  className='nombre'
                  id='nombre'
                  name='nombre'
                  value={user.nombre}
                  onChange={onChange}
                />
              </div>
              <div className='mail org'>
                <label>Correo</label>
                  <input
                    type='email'
                    className='email'
                    id='email'
                    name='correo'
                    value={user.correo}
                    onChange={onChange}
                  />
              </div>

              <div className='mail org'>
                <label>password</label>
                  <input
                    type='password'
                    className='password'
                    id='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                  />
              </div>

              <div className='passw org'>
                <label>Rol:</label>
                <input
                  type='text'
                  className='rol'
                  id='rol'
                  name='rol'
                  value={user.rol}
                  onChange={onChange}
                />
              </div>

              <div className='celu org'>
                <label>Celular:</label>
                <input
                  type='text'
                  className='celular'
                  id='celular'
                  name='celular'
                  value={user.celular}
                  onChange={onChange}
                />
            </div>
          </div>
          )}
          

          <input type='submit' value='Editar' className='ingresar' />
        </form>
      </ModalEdit>
      <Table striped bordered hover className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {results.map(usuario => (
          <tbody key={usuario._id}>
            <tr>
              <td>{num++}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.rol}</td>
              <td>{usuario.celular}</td>
              <td>
                <Link to={`/usuarios/${usuario._id}`} className='btn-editar'>
                  <Button variant="warning" onClick={toggleEdit}>Editar</Button>{' '}
                </Link>
                <Button variant="danger" onClick={() => deleteUser(usuario._id)}>Borrar</Button>{' '}
              </td>
            </tr>
          </tbody>
        ))}

      </Table>
    </div>
  )
}

export default Content