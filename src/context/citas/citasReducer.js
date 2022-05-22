import {
    ELIMINAR_CITA,
    AGREGAR_CITA,
    ACTULIZAR_CITA,
    OBTENER_CITA,
    AGREGAR_CITA_ERROR
} from '../../types'

const citasReducer = (state, action)=>{
	switch(action.type){

		case AGREGAR_CITA:
			return{
				...state,
				cita: action.payload,
				
			}
        
        case AGREGAR_CITA_ERROR:
            return{
                ...state,
                mensaje: true,
            }

		case OBTENER_CITA:
			return{
				...state,
				citas: action.payload
			}
		
		case ELIMINAR_CITA:
			return{
				...state,
				citas: state.citas.filter(cita=> cita._id!==
				action.payload)
			}

		case ACTULIZAR_CITA:
			return{
				...state,
				citas: state.citas.map(cita=>{
					if(cita._id === action.payload._id){
                        const datos = {
                            servicio: action.payload.servicio,
						    ubicacion: action.payload.ubicacion,
						    fecha: action.payload.fecha,
						    comentarios: action.payload.comentarios,
                        }
                        return datos
					}
                    return cita
				})
			}
		default:
			return state;
	}
}

export default citasReducer