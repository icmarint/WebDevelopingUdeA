let reservas = require("./reservas.json")
let request = require("axios")

const reservasGet = () => {
    return reservas
}

const reservasSet = async (reserva) => {
    console.log("llama a reserva a guardar")
    const vuelo = request.get(
        "http://localhost:8081/vuelos/id/?id="+reserva.idvuelo
    )

    const cliente = request.get(
        "http://localhost:8082/clientes/id/?id="+reserva.idcliente
    )
    
    const reservaVuelo = request.patch(
        "http://localhost:8081/vuelos/sillas/?id="+reserva.idvuelo,
        reserva.sillas
    )

    await request.all([vuelo, cliente, reservaVuelo])
    .then(
        (res)=>{
            console.log("recibimos llamada del vuelo")
            console.log(res[0].data)
            console.log(res[1].data)
            console.log(res[2].data)
            reserva.vuelo = res[0].data
            reserva.cliente = res[1].data
            reserva.mensaje = res[2].data
        }
    ).catch(
        (res)=>{
            console.log("Error")
        }
    )
    console.log(reserva)
    reservas.push(reserva)
    console.log(reservas)

    return reservas
}

module.exports.reservasgetExport = reservasGet;
module.exports.reservasSetExport = reservasSet;