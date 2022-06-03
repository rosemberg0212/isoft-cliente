import React, { useReducer, useCallback } from 'react'
import ServiceContext from './serviceContext'
import ServiceReducer from './serviceReducer'
import axios from 'axios'
import Swal from 'sweetalert2'

import {
    // ELIMINAR_SERVICIO,
    AGREGAR_SERVICIO,
    // ACTULIZAR_SERVICIO,
    OBTENER_SERVICIO,
} from '../../types'

const getToken = () => localStorage.getItem('token')
const INITIAL_STATE = {
    servicio: null,
    servicios: [],
    mensaje: null, 
}

const ServiceState = (props) => {
    const [state, dispatch] = useReducer(ServiceReducer, INITIAL_STATE)

    //Crear servicios
    const crearServicio = useCallback(async (datos) => {
        const token = getToken()
        if (token) {
            try {
                console.log(datos)
                const res = await axios.post('https://api-citas-isoft.herokuapp.com/api/servicios', datos, {
                    headers: {
                        'x-token': token
                    }
                });
                console.log(res)

                dispatch({
                    type: AGREGAR_SERVICIO,
                    payload: res.data
                })

                Swal.fire({
                    icon: 'success',
                    title: 'Servicio creado con éxito.',
                    showConfirmButton: true,
                    // timer: 1800
                })
            } catch (error) {
                console.log(error.response)
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Debe iniciar sesion primero para poder crear un servicio.',
                showConfirmButton: true,
                // timer: 1800
            })
        }
    }, [])

    //Obtener servicios
    const obtenerServicios = useCallback(async () => {
        try {
            const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/servicios');
            console.log(res.data.servicio)

            dispatch({
                type: OBTENER_SERVICIO,
                payload: res.data.servicio
            })
        } catch (error) {
            console.log(error.response)
        }
    }, [])

    //   //Obtener citas por user
    //   const obtenerCitasUser = useCallback(async () => {
    //     const token = getToken()
    //     if(token){
    //       try {
    //         const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/calendar/user', {
    //           headers: {
    //             'x-token': token
    //           }
    //         });
    //         // const res = await axios.get('https://api-citas-isoft.herokuapp.com/api/calendar/car');
    //         console.log(res.data.calendar)

    //         dispatch({
    //           type: OBTENER_CITA_USER,
    //           payload: res.data.calendar
    //         })
    //       } catch (error) {
    //         console.log(error.response)
    //       }
    //     }

    //   }, [])


    //   //Borrar citas
    //   const borrarCita = useCallback(async (id) => {
    //     const token = getToken();
    //     if (token) {
    //       try {
    //         const res = await axios.delete(`https://api-citas-isoft.herokuapp.com/api/calendar/${id}`, {
    //           headers: {
    //             'x-token': token
    //           }
    //         });
    //         console.log(res)
    //         dispatch({
    //           type: ELIMINAR_CITA,
    //           payload: id
    //         })
    //         Swal.fire({
    //           icon: 'success',
    //           title: 'Cita borrada con éxito.',
    //           showConfirmButton: true,
    //           // timer: 1800
    //         })
    //       } catch (error) {
    //         console.log(error.response.data)
    //       }
    //     }
    //   }, [])

    //   //Editar citas
    //   const editarCita = useCallback(async (cita) => {
    //     const token = localStorage.getItem('token')
    //     if (token) {
    //       try {
    //         const res = await axios.put(`https://api-citas-isoft.herokuapp.com/api/calendar/${cita._id}`, cita, {
    //           headers: {
    //             'x-token': token
    //           }
    //         });
    //         console.log(res)

    //         dispatch({
    //           type: ACTULIZAR_CITA,
    //           payload: cita
    //         })
    //         Swal.fire({
    //           icon: 'success',
    //           title: 'Cita Editada con éxito.',
    //           showConfirmButton: true,
    //           // timer: 1800
    //         })
    //       } catch (error) {
    //         console.log(error.response)
    //       }
    //     }
    //   }, [])

    //   const setIditCita = (data)=>{
    //     dispatch({
    //     	type: SETIAR_CITA,
    //       payload: data
    //     })
    //   }

    //   const resetCita = ()=>{
    //     dispatch({
    //       type: RESETIAR_CITA
    //     })
    //   }

    const { servicio, servicios, mensaje } = state
    const values = {
        servicio,
        servicios,
        mensaje,
        crearServicio,
        obtenerServicios,
    }

    return (
        <ServiceContext.Provider
            value={values}
        >
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceState