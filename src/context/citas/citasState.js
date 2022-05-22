import React, { useReducer, useCallback } from 'react'
import CitasContext from './citasContext'
import CitasReducer from './citasReducer'
import axios from 'axios'
import Swal from 'sweetalert2'

import {
    // ELIMINAR_CITA,
    AGREGAR_CITA,
    // ACTULIZAR_CITA,
    OBTENER_CITA,
    // AGREGAR_CITA_ERROR
} from '../../types'

const getToken = () => localStorage.getItem('token')
const INITIAL_STATE = {
  cita: null,
  citas: [],
  mensaje: null,
}

const CitaState = (props) => {
  const [state, dispatch] = useReducer(CitasReducer, INITIAL_STATE)

  //Crear citas
  const crearCita = useCallback(async (datos) => {
    const token = getToken()
		if(token){
			try{
				const res = await axios.post('http://localhost:8080/api/calendar', datos, {
					headers: {
					'x-token': token
					}
				});
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
			}catch(error){
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
  const obtenerCitas = useCallback(async ()=>{
      try{
          const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/citas');
            console.log(res.data.citas)

          dispatch({
              type: OBTENER_CITA,
              payload: res.data.citas
          }) 
      }catch(error){
          console.log(error.response)
      }	
  },[])
  

  //Borrar citas
  const borrarCita = useCallback(async (id)=>{
      const token = getToken();
      if(token){
          try{
              const res = await axios.delete(`https://api-citas-isoft.herokuapp.com/api/citas/${id}`, {
                  headers: {
                  'x-token': token
                  }
              });
              console.log(res)
            //   dispatch({
            //       type: ELIMINAR_CITA,
            //       payload: id
            //   }) 
          }catch(error){
              console.log(error)
          }
      }
  },[])
  
  //Editar citas
  const editarCita = useCallback(async (cita)=>{
      const token = localStorage.getItem('token')
      if(token){
          try{
              const res = await axios.put(`https://api-citas-isoft.herokuapp.com/api/citas/${cita._id}`, cita, {
                  headers: {
                  'x-token': token
                  }
              });
              console.log(res)

            //   dispatch({
            //       type: ACTULIZAR_CITA,
            //       payload: cita
            //   }) 
          }catch(error){
              console.log(error)
          }
      }
  },[])

  const {cita, citas, mensaje} = state
  const values = {
    cita,
    citas,
    mensaje,
    crearCita,
    obtenerCitas,
    borrarCita,
    editarCita
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