const TOKEN = "XOE0vKkHaB5HDYdheh98OlP2-34cp9xQZDfweICg"
const URL_BBDD = "https://app.nocodb.com/api/v2/tables/mgtv32zg6vjaanm/records"

export const getPlatos = () => {

    const options = {
        method: "GET", 
        headers: {
            "xc-token": TOKEN, 
            "content-type": "Application/JSON"
        }
    }

    return fetch(URL_BBDD, options)
    .then(x => x.json())
    .then(y => y.list)
    .catch(err => console.log("ERROR getPlatos: " + err))

}
