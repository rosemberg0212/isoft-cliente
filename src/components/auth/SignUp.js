import React, {  useEffect, useState } from 'react'
import {useAuth} from '../../context/auth/authContext'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SignUp = () => {
    
    const { autenticado,  registrarUsuario} = useAuth()

  let navigate = useNavigate()
    
  useEffect(() => {
    if (autenticado) {
      navigate('/reservas')
    }

  //   // if (mensaje) {
  //   //   Swal.fire({
  //   //     icon: 'error',
  //   //     title: 'Correo o contraseña incorrectos',
  //   //     showConfirmButton: false,
  //   //     timer: 1800,
  //   //   })
  //   // }
  }, [autenticado, navigate])

  const [usur, guardarUsuario] = useState({
    nombre: '',
    correo: '',
    password: '',
    celular: ''
  })

  const { nombre, correo, password, celular } = usur

  const onChange = (e) => {
    guardarUsuario({
      ...usur,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (correo.trim() === '' || password.trim() === '' || nombre.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Todos los campos son obligatorios',
        showConfirmButton: false,
        timer: 1800
      })
      return
    }

    if (password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'La contraseña debe ser mayor a 5 caracteres',
        showConfirmButton: false,
        timer: 1800
      })
      return
    }

    registrarUsuario({
      correo,
      password,
      nombre,
      celular
    }) 
  }
  return (
    <div className='content_login'>
      <h2 className='title'>Registro</h2>
      <form onSubmit={onSubmit}>
      <div className='name org'>
          <label>Nombre</label>
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
          <label>Contraseña</label>
          <input
            type='password'
            className='password'
            id='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>

        <div className='celu org'>
          <label>Celular(opcional)</label>
          <input
            type='text'
            className='celular'
            id='celular'
            name='celular'
            value={celular}
            onChange={onChange}
          />
        </div>
        <input type='submit' value='Registrar' className='ingresar' />
        <div className='regis'>
          <hr/>
          <Link to='/signIn'>¿Ya tienes una cuenta? Inicia Sesión</Link>
        </div>
        
      </form>
    </div>
  )
}

export default SignUp
