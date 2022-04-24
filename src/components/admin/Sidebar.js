import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
      <div className='content-sidebar'>
        <ul className='sidebar'>
        <li>
            <Link to='/admin'>Incio</Link>
        </li>
        <li>
            <Link to='/usuarios'>Usuarios</Link>
        </li>
        <li>
            <Link to='/citas'>Citas</Link>
        </li>
        <li>
            <Link to='/servicios'>Servicios</Link>
        </li>
        <li>
            <Link to='/info'>Info</Link>
        </li>
    </ul>
      </div>
  )
}

export default Sidebar