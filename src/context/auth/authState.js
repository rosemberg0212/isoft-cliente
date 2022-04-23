import React, { useReducer, useCallback } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import axios from 'axios'

import {
  // REGISTRO_EXITOSO,
  // REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
} from '../../types'


const getToken = () => localStorage.getItem('token')

const INITIAL_STATE = {
  token: getToken(),
  autenticado: null,
  usuario: null,
  mensaje: null,
}

const AuthState = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  //Registrar usuarios
  const registrarUsuario = useCallback(async (datos) => {
    // try{
    // 	const res = await axios.post('https://api-restauran.herokuapp.com/api/usuarios/', datos);
    // 	console.log(res.data);
    // 	dispatch({
    // 		type: REGISTRO_EXITOSO,
    // 		payload: res.data
    // 	})
    // 	usuarioAutenticado()
    // }catch(error){
    // 	console.log(error.response.data.errors)
    // 	dispatch({
    // 		type: REGISTRO_ERROR,
    // 		payload: error.response.data.errors
    // 	})
    // }
  }, [])

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

  const {token, usuario, mensaje, autenticado} = state
  const values = {
    token,
    autenticado,
    usuario,
    mensaje,
    registrarUsuario,
    iniciarSesion,
    usuarioAutenticado,
    cerrarSesion,
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
