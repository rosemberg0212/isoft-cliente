import React, { useEffect, useState } from 'react'
import {useAuth} from '../../context/auth/authContext'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SignIn = () => {
  const { autenticado, mensaje, iniciarSesion } = useAuth()

  let navigate = useNavigate()
    
  useEffect(() => {
    if (autenticado) {
      navigate('/reservas')
    }

    if (mensaje) {
      Swal.fire({
        icon: 'error',
        title: 'Correo o contraseña incorrectos',
        showConfirmButton: false,
        timer: 1800,
      })
    }
  }, [autenticado, mensaje, navigate])

  const [usur, guardarUsuario] = useState({
    correo: '',
    password: '',
  })

  const { correo, password } = usur

  const onChange = (e) => {
    guardarUsuario({
      ...usur,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (correo.trim() === '' || password.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Todos los campos son obligatorios',
        showConfirmButton: false,
        timer: 1800
      })
      return
    }

    iniciarSesion({
      correo,
      password,
    })
  }
  return (
    <div className='content_login'>
      <h2 className='title'>Iniciar Sesión</h2>
      <form onSubmit={onSubmit}>
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
        <input type='submit' value='Ingresar' className='ingresar' />
        <div className='regis'>
          <hr/>
          <Link to='/signUp'>¿Aún no tienes una cuante? Regístrate</Link>
        </div>
        
      </form>
    </div>
  )
}

export default SignIn
