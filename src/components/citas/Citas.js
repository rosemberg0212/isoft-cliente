import React, { useEffect, useState } from 'react'
import MapView from '../maps/MapView'
import {useCitas} from '../../context/citas/citasContext'
// import Swal from 'sweetalert2'
// import DatePicker,{registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Datetime from 'react-datetime';

const Citas = () => {

    const {obtenerCitas, crearCita} = useCitas()

    useEffect(() => {
     obtenerCitas()
     
        
    }, [obtenerCitas])
    

    const [reservas, guardarReserva] = useState({
        title: '',
        descripcion: ''
    })
    const [start, setStart] = useState(new Date())

    //state para la fecha
    // const [startDate, setStartDate] = useState(null);
   
    // const isWeekday = (date) => {
    //     const day = date.getDay();
    //     return day !== 0 && day !== 6;
    //   };
    // registerLocale('es', es)

    // const onDate = (date, e)=>{
    //     setStartDate(date,e)
    // }
    
    const {title, descripcion} = reservas;

    const onChange = (e)=>{
        guardarReserva({
            ...reservas,
            [e.target.name]: e.target.value
        });
    }
    
    
    const onSubmit = (e)=>{
        e.preventDefault();

        crearCita({
            title,
            start,
            descripcion
        })
    }
  return (
    <div className='content_citas'>
        <div className='reservas'>
            <p className='title'>Elige los servicios que requieres, el día y la hora, y reserva tu cita en la mejor peluquería de Cartagena.</p>
            <form onSubmit={onSubmit}>
                <div className='servi orga'>
                    <label>Servicio(*)</label>
                    <select className='servicio' name='title' value={title} onChange={onChange}>
                        <option>Selecciona una opción</option>
                        <optgroup label='CORTES Y BLOWER'>
                            <option>Corte</option>
                            <option>Corte + Blower</option>
                            <option>Peinado + Blower</option>
                            <option>Retoque + Blower</option>
                            <option>Flequillo + Blower</option>
                            <option>Flequillo</option>
                            <option>Recogidos</option>
                            <option>Arreglo de barba(máquina)</option>
                            <option>Arreglo de barba(paño-cuchilla-forma)</option>
                            <option>Shampo</option>
                        </optgroup>
                        <optgroup label='Manicure y Pedicure'>
                        <option>Retoque + Blower</option>
                            <option>Manicure</option>
                            <option>Hidratación Parafina Manos</option>
                            <option>Cambio de esmalte</option>
                            <option>Manicure SPA</option>
                            <option>Manicure Semipermanente(Pies o Manos)</option>
                            <option>Maquillaje Encima Semipermanente(solo Pintado)</option>
                        </optgroup>
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
                    <div>
                    <label>Start Date</label>
                    <Datetime value={start} onChange={date => setStart(date)}/>
                </div>
                </div>

                <div className='comenta orga'>
                    <label>Comentario</label>
                    <input 
                        type='text' 
                        className='textA'
                        name='descripcion'
                        value={descripcion}
                        onChange={onChange}
                    />
                </div>

                <input type='submit' name='enviar' className='envi'/>
            </form>
            
        </div>

        <div className='mapa'>
            <div className='ubica'>
                <MapView/>
                <div>
                    <h1>CECYDATES</h1>
                    <hr/>
                    <p>Centro comercial Getsemaní.</p>
                    <p>WhatsApp: 3015687122.</p>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Citas