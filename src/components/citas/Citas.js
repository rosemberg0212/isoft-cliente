import React from 'react'
import MapView from '../maps/MapView'

const Citas = () => {
    
  return (
    <div className='content_citas'>
        <div className='reservas'>
            <p className='title'>Elige uno de nuestros puntos de atención, los servicios que requieres; y reserva tu cita en la mejor peluquería de Cartagena.</p>
            <form>
                <div className='servi orga'>
                    <label>Servicio(*)</label>
                    <select className='servicio'>
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
                    <select className='atencion'>
                        <option>Selecciona una opción</option>
                        <option>Centro no se donde mas</option>
                    </select>
                </div>

                <div className='fecha orga'>
                    <label>Fecha y Hora para el servicio (*)</label>
                    <input type='datetime-local' className='campoF'/>
                </div>

                <div className='fecha orga'>
                    <label>Comentario</label>
                    <input type='text' className='textA'/>
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