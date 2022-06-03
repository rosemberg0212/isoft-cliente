import {
    ELIMINAR_SERVICIO,
    AGREGAR_SERVICIO,
    ACTULIZAR_SERVICIO,
    OBTENER_SERVICIO,
} from '../../types'

const ServiceReducer = (state, action) => {
    switch (action.type) {

        case AGREGAR_SERVICIO:
            return {
                ...state,
                servicio: action.payload,

            }

        case OBTENER_SERVICIO:
            return {
                ...state,
                servicios: action.payload
            }

        case ELIMINAR_SERVICIO:
            return {
                ...state,
                servicios: state.servicios.filter(servicio => servicio._id !==
                    action.payload)
            }

        case ACTULIZAR_SERVICIO:
            return {
                ...state,
                servicios: state.servicios.map(servicio => {
                    if (servicio._id === action.payload._id) {
                        const datos = {
                            ...action.payload,
                            nombre: action.payload.nombre,
                            descripcion: action.payload.descripcion,
                            imgURL: action.payload.imgURL,
                            public_id: action.payload.public_id
                        }
                        return datos
                    }
                    return servicio
                })
            }

        default:
            return state;
    }
}

export default ServiceReducer