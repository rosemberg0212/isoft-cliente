import React, { useReducer, useCallback } from 'react'
import CitasContext from './citasContext'
import CitasReducer from './citasReducer'
import axios from 'axios'
import Swal from 'sweetalert2'

import {
  ELIMINAR_CITA,
  AGREGAR_CITA,
  ACTULIZAR_CITA,
  OBTENER_CITA,
  RESETIAR_CITA,
  SETIAR_CITA,
  OBTENER_CITA_USER
  // AGREGAR_CITA_ERROR
} from '../../types'

const getToken = () => localStorage.getItem('token')
const INITIAL_STATE = {
  cita: null,
  citas: [],
  citasUser: [],
  mensaje: null,
  setCita: null
}

const CitaState = (props) => {
  const [state, dispatch] = useReducer(CitasReducer, INITIAL_STATE)

  //Crear citas
  const crearCita = useCallback(async (datos) => {
    const token = getToken()
    if (token) {
      try {
        const res = await axios.post('https://api-citas-isoft.herokuapp.com/api/calendar', datos, {
          headers: {
            'x-token': token
          }
        });
        // const res = await axios.post('https://api-citas-isoft.herokuapp.com/api/calendar', datos, {
        // 	headers: {
        // 	'x-token': token
        // 	}
        // });
        console.log(res)

        dispatch({
          type: AGREGAR_CITA,
          payload: res.data
        })

        Swal.fire({
          icon: 'success',
          title: 'Cita agendada con éxito.',
          showConfirmButton: true,
          // timer: 1800
        })
      } catch (error) {
        console.log(error.response)
      }
    }
    else {
      // dispatch({
      //     type: AGREGAR_CITA_ERROR
      // }) 
      Swal.fire({
        icon: 'error',
        title: 'Debe iniciar sesion primero para poder agendar una cita.',
        showConfirmButton: true,
        // timer: 1800
      })
    }
  }, [])

  //Obtener citas
  const obtenerCitas = useCallback(async () => {
    try {
      const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/calendar/car');
      // const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/calendar/car');
      console.log(res.data)

      dispatch({
        type: OBTENER_CITA,
        payload: res.data
      })
    } catch (error) {
      console.log(error.response)
    }
  }, [])

  //Obtener citas por user
  const obtenerCitasUser = useCallback(async () => {
    const token = getToken()
    if(token){
      try {
        const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/calendar/user', {
          headers: {
            'x-token': token
          }
        });
        // const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/calendar/car');
        console.log(res.data.calendar)
  
        dispatch({
          type: OBTENER_CITA_USER,
          payload: res.data.calendar
        })
      } catch (error) {
        console.log(error.response)
      }
    }
    
  }, [])


  //Borrar citas
  const borrarCita = useCallback(async (id) => {
    const token = getToken();
    if (token) {
      try {
        const res = await axios.delete(`https://api-citas-isoft.herokuapp.com/api/calendar/${id}`, {
          headers: {
            'x-token': token
          }
        });
        console.log(res)
        dispatch({
          type: ELIMINAR_CITA,
          payload: id
        })
        Swal.fire({
          icon: 'success',
          title: 'Cita borrada con éxito.',
          showConfirmButton: true,
          // timer: 1800
        })
      } catch (error) {
        console.log(error.response.data)
      }
    }
  }, [])

  //Editar citas
  const editarCita = useCallback(async (cita) => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const res = await axios.put(`https://api-citas-isoft.herokuapp.com/api/calendar/${cita._id}`, cita, {
          headers: {
            'x-token': token
          }
        });
        console.log(res)

        dispatch({
          type: ACTULIZAR_CITA,
          payload: cita
        })
        Swal.fire({
          icon: 'success',
          title: 'Cita Editada con éxito.',
          showConfirmButton: true,
          // timer: 1800
        })
      } catch (error) {
        console.log(error.response)
      }
    }
  }, [])

  const setIditCita = (data)=>{
    dispatch({
    	type: SETIAR_CITA,
      payload: data
    })
  }

  const resetCita = ()=>{
    dispatch({
      type: RESETIAR_CITA
    })
  }

  const { cita, citas, mensaje, setCita, citasUser } = state
  const values = {
    cita,
    citas,
    mensaje,
    setCita,
    citasUser,
    crearCita,
    obtenerCitas,
    borrarCita,
    editarCita,
    setIditCita,
    resetCita,
    obtenerCitasUser
  }

  return (
    <CitasContext.Provider
      value={values}
    >
      {props.children}
    </CitasContext.Provider>
  )
}

export default CitaState