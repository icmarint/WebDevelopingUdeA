const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const reservasService = require("./ReservaService")

const app = express()
const port = 8084

app.use(cors())
app.use(body_parse.json())

app.get("/reservas",
    (req, res)=>{
        console.log("Recibimos petición")
        console.log(req)
        res.send(reservasService.reservasgetExport())
    }
)

app.post("/reservas",
    async (req, res)=>{
        console.log("Recibimos petición")
        console.log(req.body)
        let reservas = await reservasService.reservasSetExport(req.body)
        res.send({"mensaje":"Reserva Guardada", "reservas":reservas})
    }
)

app.listen(port,
    ()=>{
        console.log("Subio el app en el puerto"+port)
    }
)