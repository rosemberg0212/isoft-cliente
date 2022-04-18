import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(()=>{
        usuarioAutenticado()
    }, [ ])
    return (
    <div>Home</div>
    )
}

export default Home