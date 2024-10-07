import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className='headerTitle'>
        <h1>Restaurante</h1>
      </div>
      <div className='nav'>
        <Link to={`/`}>Inicio</Link>
        <Link to={`/Carta`}>Carta</Link>
        <Link to={`/Menu`}>Menu</Link>
        <Link to={`/Reserva`}>Reserva</Link>
      </div>
    </div>
  )
}

export default Header