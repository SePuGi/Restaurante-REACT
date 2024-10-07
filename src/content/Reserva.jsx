
import React, { useState } from 'react'
import { getReservas, setReservas } from '../controllers/reservaController'

function reserva() {

  const today = new Date().toISOString().split('T')[0];

  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")
  const [comentario, setComentario] = useState("")

  const [reservado, setReservado] = useState(0)

  function handleSubmit(e){
    e.preventDefault();

    const reserva = {
      nombre: nombre,
      telefono: telefono,
      email: email,
      fecha: fecha + " " + hora,
      comentario: comentario
    }

    setReservas({reserva})
    .then(() => {
      setNombre("")
      setTelefono("")
      setEmail("")
      setFecha("")
      setHora("")
      setComentario("")
      console.log("RESERVADO")
      setReservado(1)
    })
    .catch(err => {
        console.log("ERROR setReserva reserva: " + err)
        setReservado(-1)
      }
    )
  }
  
// nombre      notnull
// telefono    notnull
// email       notnull
// fecha       notnull
// comentario

  return (
    <div>
      <h2>Reserva</h2>

      <form onSubmit={handleSubmit}>

        <div className="formRowStyle">
            <label htmlFor='nombre'>Nombre </label>
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
        </div>
        <div className="formRowStyle">
            <label htmlFor="telf">Telefono </label>
            <input type="text" id="telf" name="telf" pattern="[0-9]{9,9}" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
        </div>
        <div className="formRowStyle">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div> 

        {/*  FECHA I HORA  */}
        <div className="formRowStyle">
            <label htmlFor="data">Data </label>
            <input type="date" id="data" name="fecha" min={today} value={fecha} onChange={(e) => setFecha(e.target.value)} required/>
        </div>
        <div className="formRowStyle">
            <label htmlFor="hora">Hora </label>
            <input type="time" id="hora" name="hora" value={hora} onChange={(e) => setHora(e.target.value)} required/>
        </div>

        <div className="formRowStyle">
            <label htmlFor="comentarios">Comentarios </label>
            <textarea className="textAreaType" type="textarea" id="comentarios" name="comentaris" wrap="hard" cols="28" value={comentario}  onChange={(e) => setComentario(e.target.value)}></textarea>
        </div>

        <div className="formRowStyleButtonSubmitType">
            <button type="submit">Enviar</button>
            <p style={{display : reservado === -1 ? 'block' : 'none', color: 'red'}}>Ha habido algún problema al hacer la reserva</p>
            <p style={{display : reservado === 1 ? 'block' : 'none', color: 'green'}}>Reserva realizada! 👍</p>
        </div>

      </form>

    </div>
  )
}

export default reserva