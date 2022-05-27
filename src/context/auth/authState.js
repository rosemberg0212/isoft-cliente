import React, { useReducer, useCallback } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import axios from 'axios'
import Swal from 'sweetalert2'

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  OBTENER_USUARIOS,
  BORRAR_USUARIO,
  EDITAR_USUARIO,
  SETIAR_USUARIO,
  RESETIAR_USUARIO,
} from '../../types'


const getToken = () => localStorage.getItem('token')

const INITIAL_STATE = {
  token: getToken(),
  autenticado: null,
  usuario: null,
  mensaje: null,
  usuarios: [],
  setUser: null
}

const AuthState = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  

  //Retornar usuario autenticado
  const usuarioAutenticado = useCallback(async () => {
    const token = getToken()
    if (token) {
      try {
        const res = await axios.get(
          'https://api-citas-isoft.herokuapp.com/api/auth/login/',
          {
            headers: {
              'x-token': token,
            },
          }
        )
        console.log(res.data)
        dispatch({
          type: OBTENER_USUARIO,
          payload: res.data.usuario,
        })
      } catch (error) {
        console.log(error.response)
        dispatch({
          type: LOGIN_ERROR,
        })
      }
    }
  }, [])

  //Registrar usuarios
  const registrarUsuario = useCallback(async (datos) => {
    try{
    	const res = await axios.post('https://api-citas-isoft.herokuapp.com/api/usuarios', datos);
    	console.log(res.data);
    	dispatch({
    		type: REGISTRO_EXITOSO,
    		payload: res.data
    	})
      Swal.fire({
        icon: 'success',
        title: 'Usuario editado con éxito.',
        showConfirmButton: true,
        // timer: 1800
      })
    	usuarioAutenticado()
    }catch(error){
    	console.log(error.response.data)
    	dispatch({
    		type: REGISTRO_ERROR,
    		payload: error.response.data.errors
    	})
    }
  }, [usuarioAutenticado])

  //obtener usuarios
  const getUsuarios = useCallback(async () => {
    try{
    	const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/usuarios');
    	console.log(res.data.usuarios);
    	dispatch({
    		type: OBTENER_USUARIOS,
    		payload: res.data.usuarios
    	})
    }catch(error){
    	console.log(error.response.data.errors)
    }
  }, [])

  //crear usuario desde el modal
  const crearUsuarioModal = useCallback(async (datos) => {
    try{
    	const res = await axios.post('https://api-citas-isoft.herokuapp.com/api/usuarios', datos);
    	console.log(res.data);
    	// dispatch({
    	// 	type: REGISTRO_EXITOSO_MODAL,
    	// 	payload: res.data
    	// })
      Swal.fire({
        icon: 'success',
        title: 'Usuario creado con éxito.',
        showConfirmButton: true,
        // timer: 1800
      })
    }catch(error){
    	console.log(error.response.data)
    	dispatch({
    		type: REGISTRO_ERROR,
    		payload: error.response.data
    	})
    }
  }, [])

  //borrar usuario
  const deleteUser = useCallback(async (id) => {
    try{
    	const res = await axios.delete(`https://api-citas-isoft.herokuapp.com/api/usuarios/${id}`);
    	console.log(res.data);
    	dispatch({
    		type: BORRAR_USUARIO,
    		payload: id
    	})
      Swal.fire({
        icon: 'success',
        title: 'Usuario borrado con éxito.',
        showConfirmButton: true,
        // timer: 1800
      })
    }catch(error){
    	console.log(error.response.data.errors)
    }
  }, [])

  //editar usuario
  const putUser = useCallback(async (usuario) => {
    try{
    	const res = await axios.put(`https://api-citas-isoft.herokuapp.com/api/usuarios/${usuario._id}`, usuario);
    	console.log(res.data);
    	dispatch({
    		type: EDITAR_USUARIO,
    		payload: usuario
    	})

      Swal.fire({
        icon: 'success',
        title: 'Usuario editado con éxito.',
        showConfirmButton: true,
        // timer: 1800
      })
      
    }catch(error){
    	console.log(error.response.data.errors)
    }
  }, [])

  //iniciar sesion
  const iniciarSesion = useCallback(async (datos) => {
    try {
      const res = await axios.post(
        'https://api-citas-isoft.herokuapp.com/api/auth/login',
        datos
      )
      console.log(res)
      dispatch({
        type: LOGIN_EXITOSO,
        payload: res.data,
      })

      usuarioAutenticado()
    } catch (error) {
      console.log(error.response.data)
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data,
      })
    }
  }, [usuarioAutenticado])
  

  const cerrarSesion = useCallback(() => {
    dispatch({
    	type: CERRAR_SESION
    })
  }, [])

  const setIditUser = useCallback((data) => {
    dispatch({
    	type: SETIAR_USUARIO,
      payload: data
    })
  }, [])


  const resetUser = ()=>{
    dispatch({
      type: RESETIAR_USUARIO
    })
  }

  const {token, usuario, mensaje, autenticado, usuarios, setUser} = state
  const values = {
    token,
    autenticado,
    usuario,
    mensaje,
    usuarios,
    setUser,
    registrarUsuario,
    iniciarSesion,
    usuarioAutenticado,
    cerrarSesion,
    getUsuarios,
    crearUsuarioModal,
    deleteUser,
    putUser,
    setIditUser,
    resetUser
  }

  return (
    <AuthContext.Provider
      value={values}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
