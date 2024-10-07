import React, { useEffect, useState } from 'react'
import { getPlatos } from '../controllers/platosController'
import Plato from '../components/Plato'
function menu() {
  const [carta, setCarta] = useState([])

  const ordenTipos = {
    1 : "entrante",
    2 : "principal",
    3 : "postre"
  }

  useEffect(() => {
    //pedir todos los platos

    getPlatos()
    .then(z => setCarta(z))
    .then(() => console.log(carta))
    .catch(err => console.log("ERROR carta - getPlatos: " + err))
  },[])

  return (
    <div>
      <h2>MENU</h2>
     <ul>

        {/* {carta.filter(x => x.menu).map((x,i) => <Plato plato={x} indice={i}/>)} */}

        <h2 style={{ display: carta.some(x => x.tipo === ordenTipos[1] && x.menu) ? 'block' : 'none' }}>Entrantes</h2>
        {
          carta
          .filter(x => x.menu)
          .filter(x => x.tipo == ordenTipos[1])
          .map((x,i) => <Plato plato={x} indice={i} key={i}/>)
        }
        
        <h2 style={{ display: carta.some(x => x.tipo === ordenTipos[2] && x.menu)  ? 'block' : 'none' }}>Principales</h2>
        {
          carta
          .filter(x => x.menu)
          .filter(x => x.tipo == ordenTipos[2])
          .map((x,i) => <Plato plato={x} indice={i} key={i}/>)
        }

        <h2 style={{ display: carta.some(x => x.tipo === ordenTipos[3] && x.menu) ? 'block' : 'none' }}>Postres</h2>
        {
          carta
          .filter(x => x.menu)
          .filter(x => x.tipo == ordenTipos[3])
          .map((x,i) => <Plato plato={x} indice={i} key={i}/>)
        }

     </ul>
    </div> 
  )
}

export default menu