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
  RESETIAR_USUARIO
} from '../../types'

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
    	localStorage.setItem('token', action.payload.token);

    	return{
    		...state,
    		autenticado: true,
    		mensaje: null
    	}

    case SETIAR_USUARIO:

    	return{
    		...state,
    		setUser: action.payload,
    	}

    case RESETIAR_USUARIO:

    	return{
    		...state,
    		setUser: null,
    	}

    case OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
      }

      case OBTENER_USUARIOS:
      return {
        ...state,
        usuarios: action.payload,
      }

      case BORRAR_USUARIO:
			return{
				...state,
				usuarios: state.usuarios.filter(usuario=> usuario._id!==
				action.payload)
			}
      
      case EDITAR_USUARIO:
			return{
				...state,
				usuarios: state.usuarios.map(usuario=>{
					if(usuario._id === action.payload._id){
            const datos = {
              ...action.payload,
              nombre: action.payload.nombre,
						  rol: action.payload.rol,
						  celular: action.payload.celular,
              correo: action.payload.correo,
            }
          return datos
					}
        return usuario
				})
			}

    case REGISTRO_ERROR:
    	localStorage.removeItem('token')
    	return{
    		...state,
    		token: null,
    		mensaje: action.payload
    	}
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      }

    case LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      }

    case CERRAR_SESION:
    	localStorage.removeItem('token')
    	return{
    		...state,
    		token: null,
    		usuario: null,
    		autenticado: null,
    		mensaje: null
    	}
    default:
      return state
  }
}

export default authReducer