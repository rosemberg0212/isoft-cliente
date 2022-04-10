import React from 'react'

const SignIn = () => {
    return (
        <div className='content_login'>
            <h2 className='title'>Iniciar Sesión</h2>
            <form>
                <div className='mail org'>
                    <label>Correo</label>
                    <input 
                        type='email' 
                        className='email' 
                        id='email'

                    />
                </div>
                <div className='passw org'>
                    <label>Contraseña</label>
                    <input 
                        type='password' 
                        className='password' 
                        id='password'

                    />
                </div>
                <input 
                    type='submit' 
                    value='Ingresar' 
                    className='ingresar'

                />
            </form>
        </div>
    )
}

export default SignIn