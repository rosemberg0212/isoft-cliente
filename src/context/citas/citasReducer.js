import {
	ELIMINAR_CITA,
	AGREGAR_CITA,
	ACTULIZAR_CITA,
	OBTENER_CITA,
	AGREGAR_CITA_ERROR,
	RESETIAR_CITA,
	SETIAR_CITA,
	OBTENER_CITA_USER
} from '../../types'

const citasReducer = (state, action) => {
	switch (action.type) {

		case AGREGAR_CITA:
			return {
				...state,
				cita: action.payload,

			}

		case AGREGAR_CITA_ERROR:
			return {
				...state,
				mensaje: true,
			}

		case OBTENER_CITA:
			return {
				...state,
				citas: action.payload
			}

		case OBTENER_CITA_USER:
			return {
				...state,
				citasUser: action.payload
			}
		case ELIMINAR_CITA:
			return {
				...state,
				citas: state.citas.filter(cita => cita._id !==
					action.payload)
			}

		case ACTULIZAR_CITA:
			return {
				...state,
				citas: state.citas.map(cita => {
					if (cita._id === action.payload._id) {
						const datos = {
							...action.payload,
							title: action.payload.title,
							moment: action.payload.moment,
							start: action.payload.start,
							descripcion: action.payload.descripcion,
						}
						return datos
					}
					return cita
				})
			}

		case SETIAR_CITA:

			return {
				...state,
				setCita: action.payload,
			}

		case RESETIAR_CITA:

			return {
				...state,
				setCita: null,
			}
		default:
			return state;
	}
}

export default citasReducer