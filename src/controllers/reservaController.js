const TOKEN = "XOE0vKkHaB5HDYdheh98OlP2-34cp9xQZDfweICg"
const URL_BBDD = "https://app.nocodb.com/api/v2/tables/mx6gewylk7sf89e/records"

export const getReservas = () => {

    const options = {
        method: "GET", 
        headers: {
            "xc-token": TOKEN, 
            "content-type": "Application/JSON"
        }
    }

    fetch(URL_BBDD, options)
    .then(x => x.json())
    .then(y => y.list)
    .then(z => console.log(z))
    .catch(err => console.log("ERROR getReservas: " + err))

}

export const setReservas = (reserva) => {

    const options = {
        method: "POST", 
        headers: {
            "xc-token": TOKEN, 
            "content-type": "Application/JSON"
        },
        body: JSON.stringify(reserva.reserva)
    }

    return fetch(URL_BBDD, options)  
    .catch(err => console.log("ERROR setReserva: " + err))

}