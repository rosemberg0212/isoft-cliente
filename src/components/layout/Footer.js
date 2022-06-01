import React from 'react'
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='content-footer'>
                <div className='logo'>
                    <h1>CECYDATES</h1>
                    <p>Síguenos:</p>
                    <div className='redes'>
                        <ImFacebook2 className='face' />
                        <BsInstagram />
                    </div>
                </div>
                <div className='ubicacion'>
                    <p>Centro comercial Getsemaní.</p>
                    <p><strong>Reservas/WhatsApp:3015687122</strong></p>
                </div>
                <div className='horario'>
                    <p>Horarios de atención autorizados:</p>
                    <p>
                        Lunes a Sábado <br/>
                        8:00 AM a 7:00 PM
                    </p>
                    <p>
                        Domingos y Festivos<br/>
                        Cerrado
                    </p>
                </div>
            </div>
            <div className='copy'>
                <p>&copy; Copyright 2022   |   Todos los Derechos Reservados   |   Desarrollado por elRous</p>
                <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Flat Icons - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/comb" title="comb icons">Comb icons created by Freepik - Flaticon</a>
            </div>
        </div>
    )
}

export default Footer