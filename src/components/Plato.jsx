import React from 'react'

function Plato({plato, indice}) {
  // platos:
  //       nombre
  //       descripcion
  //       precio
  //       foto(url)
  //       menu (boolean para indicar si esta en el menu semanal)
  //       tipo(entrante, principal, postre)
  //       vegetariano (boolean)

  return (
    <li key={indice} className='plato'>
      <div className='nombrePrecio'>
        <p>Nombre: {plato.nombre}</p>
        <p className='precio'>Precio: <strong>{plato.precio}€</strong></p>
      </div>
      <div className='caracterisicasPlato'>
        <img src='src/assets/plato.jpeg'></img>
        <p>{plato.descripcion}</p>
        {plato.vegetariano && <a className='etiqueta'>🌿</a>}
      </div>
    </li>
  )
}

export default Plato