import React, { useEffect, useRef, useState } from 'react'
import { getPlatos } from '../controllers/platosController'
import Plato from '../components/Plato'

function carta() {

  const [carta, setCarta] = useState([])
  const [cartaTmp, setCartaTmp] = useState([])

  const [mostrar, setMostrar] = useState(0)

  const tiposPlatos = ["Todo","Entrantes", "Principales", "Postres"]

  function mostrarSeleccionado(e){

    console.log("Seleccionado: " + e.target.selectedIndex)
    
    setMostrar(e.target.selectedIndex)

    switch(e.target.selectedIndex){
      case 0:
        setCarta(cartaTmp)
        break;
      case 1:
        setCarta(cartaTmp.filter(x => x.tipo == "entrante"))
        break;
      case 2:
        setCarta(cartaTmp.filter(x => x.tipo == "principal"))
        break;
      case 3:
        setCarta(cartaTmp.filter(x => x.tipo == "postre"))
        break;
      default:
        break;
    } 
  }

  const ordenTipos = {
    1 : "entrante",
    2 : "principal",
    3 : "postre"
  }


  useEffect(() => {
    //pedir todos los platos
    getPlatos()
    .then(z => {
      setCarta(z) 
      setCartaTmp(z)}
    )
    .catch(err => console.log("ERROR carta - getPlatos: " + err))
  },[])

  return (
    <div>
      <h2>CARTA</h2>

      <select onChange={(e) => mostrarSeleccionado(e)}>
        {tiposPlatos.map((x,i) => <option key={i}>{x}</option>)}
      </select>

      <ul>
{/* 
        {
          carta.sort((a, b) => ordenTipos[a.tipo] - ordenTipos[b.tipo])
          .map((x,i) => <Plato plato={x} indice={i}/>)
        } */}

        <h2 style={{ display: mostrar === 0 || mostrar === 1 ? 'block' : 'none' }}>Entrantes</h2>
        {
          carta
          .filter(x => x.tipo == ordenTipos[1])
          .map((x,i) => <Plato plato={x} indice={i} key={i}/>)
        }
        
        <h2 style={{ display: mostrar === 0 || mostrar === 2 ? 'block' : 'none' }}>Principales</h2>
        {
          carta
          .filter(x => x.tipo == ordenTipos[2])
          .map((x,i) => <Plato plato={x} indice={i} key={i}/>)
        }
        <h2 style={{ display: mostrar === 0 || mostrar === 3 ? 'block' : 'none' }}>Postres</h2>
        {
          carta
          .filter(x => x.tipo == ordenTipos[3])
          .map((x,i) => <Plato plato={x} indice={i} key={i}/>)
        }

      </ul>
    </div> 
  )
}

export default carta