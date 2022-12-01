const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const vuelosService = require("./VueloService.js")

const app = express()
const port = 8081

app.use(cors())
app.use(body_parse.json())

const pathName = "/vuelos"

app.get(pathName,
    async (req, res)=>{
        console.log("Recibimos petición")
        res.send(await vuelosService.vuelosgetExport())
    }
)

app.get(pathName+"/id",
    async (req, res)=>{
        console.log("Recibimos petición")
        let id = req.query.id
        console.log(id)
        res.send(await vuelosService.vuelosgetidExport(id))
    }
)

app.post(pathName,
    async (req, res)=>{
        console.log("Recibimos petición")
        console.log(req.body)
        let vuelos = await vuelosService.vuelosSetExport(req.body)
        res.send({"mensaje":"Vuelo guardado","vuelos":vuelos})
    }
)

app.delete(pathName,
    (req, res)=>{
        console.log("Recibimos petición")
        let id = req.query.id
        console.log(id)
        let vuelos = vuelosService.vuelosDeleteExport(id)
        res.send({"mensaje":"Vuelo borrado", "vuelos":vuelos})
    }
)

app.put(pathName,
    (req, res)=>{
        console.log("Recibimos petición")
        console.log(req.body)
        res.send("Finaliza")
    }
)

app.patch(pathName,
    (req, res)=>{
        console.log("Recibimos petición")
        console.log(req.body)
        res.send("Finaliza")
    }
)

app.patch(pathName+"/sillas",
    (req, res)=>{
        console.log("reserva sillas")
        console.log(req.body)
        id = req.query.id
        res.send(vuelosService.sillasReservadasExport(req.body, id))
    }
)

app.listen(port,
    ()=>{
        console.log("Subio el app en el puerto"+port)
    }
)