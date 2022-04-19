import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {

    const authContext = useContext(AuthContext);
    const {autenticado, mensaje, iniciarSesion} = authContext;

    let navigate = useNavigate();
    useEffect(()=>{
        
        if(autenticado){
            navigate('/'); 
        }

        if(mensaje){
            Swal.fire({
                icon: 'error',
                title: 'Correo o contraseña incorrectos',
                showConfirmButton: false,
                timer: 1800
            })
        }
    }, [ autenticado, mensaje, navigate])

    const [usur, guardarUsuario] = useState({
        correo: '',
        password: ''
    })

    const {correo, password} = usur;

    const onChange = (e)=>{
        guardarUsuario({
            ...usur,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()

        
        if(correo.trim() === '' || password.trim() === ''){
            console.log('error')
            return
        }

        iniciarSesion({
            correo,
            password
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
                <input 
                    type='submit' 
                    value='Ingresar' 
                    className='ingresar'

                />
            </form>
        </div>
    )
}

export default SignIn