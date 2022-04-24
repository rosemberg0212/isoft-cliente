import React, { useEffect, useState } from 'react'
import MapView from '../maps/MapView'
import {useCitas} from '../../context/citas/citasContext'
import Swal from 'sweetalert2'
import DatePicker,{registerLocale} from 'react-datepicker'
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";

const Citas = () => {

    const {obtenerCitas, crearCita, mensaje} = useCitas()

    useEffect(() => {
     obtenerCitas()
        
    }, [obtenerCitas])
    

    const [reservas, guardarReserva] = useState({
        servicio: '',
        ubicacion: '',
        fecha: null,
        comentarios: ''
    })

    //state para la fecha
    const [startDate, setStartDate] = useState(null);
   
    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
      };
    registerLocale('es', es)

    const onDate = (date, e)=>{
        setStartDate(date,e)
    }
    
    const {servicio, ubicacion, fecha, comentarios} = reservas;

    const onChange = (e)=>{
        guardarReserva({
            ...reservas,
            [e.target.name]: e.target.value
        });
    }
    
    
    const onSubmit = (e)=>{
        e.preventDefault();

        if(mensaje){
            Swal.fire({
                icon: 'error',
                title: 'Debe iniciar sesion primero',
                showConfirmButton: true,
                // timer: 1800
              })
            return
        }

        crearCita({
            servicio,
            ubicacion,
            fecha: startDate,
            comentarios
        })
    }
  return (
    <div className='content_citas'>
        <div className='reservas'>
            <p className='title'>Elige uno de nuestros puntos de atención, los servicios que requieres; y reserva tu cita en la mejor peluquería de Cartagena.</p>
            <form onSubmit={onSubmit}>
                <div className='servi orga'>
                    <label>Servicio(*)</label>
                    <select className='servicio' name='servicio' value={servicio} onChange={onChange}>
                        <option>Selecciona una opción</option>
                        <optgroup label='CORTES Y BLOWER'>
                            <option>Corte</option>
                            <option>Peinado</option>
                            <option>Retoque</option>
                        </optgroup>
                    </select>
                </div>

                <div className='punto orga'>
                    <label>Selecciona uno de nuestros puntos de atención</label>
                    <select className='atencion' name='ubicacion' value={ubicacion} onChange={onChange}>
                        <option>Selecciona una opción</option>
                        <option>Centro no se donde mas</option>
                    </select>
                </div>

                <div className='fecha orga'>
                    <label>Fecha y Hora para el servicio (*)</label>
                    {/* <input 
                        type='datetime-local' 
                        className='campoF' 
                        min={fechaA} 
                        name='fecha'
                        value={fecha}
                        onChange={onChange}
                    /> */}
                    <DatePicker 
                        selected={startDate}
                        name='fecha'
                        value={fecha}
                        onSelect={onDate}
                        minDate={new Date()}
                        locale='es'
                        filterDate={isWeekday}
                        showDisabledMonthNavigation
                        />
                </div>

                <div className='comenta orga'>
                    <label>Comentario</label>
                    <input 
                        type='text' 
                        className='textA'
                        name='comentarios'
                        value={comentarios}
                        onChange={onChange}
                    />
                </div>

                <input type='submit' name='enviar' className='envi'/>
            </form>
        </div>

        <div className='mapa'>
            <div className='ubica'>
                <MapView/>
            </div>
            
        </div>
    </div>
  )
}

export default Citas