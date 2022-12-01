const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const clientesService = require("./clienteService.js")

const app = express()
const port = 8082

const pathName = "/clientes"

app.use(cors())
app.use(body_parse.json())

app.get(pathName,
        (req, res)=>{
            console.log("Recibimos petición")
            console.log(req)
            res.send(clientesService.clientesgetExport())
        }
    )


app.get(pathName+"/id",
        (req, res)=>{
            console.log("Recibimos petición")
            let id = req.query.id
            res.send(clientesService.clientesgetIdExport(id))
        }
    )


app.listen(port,
    ()=>{
        console.log("Subio el app en el puerto"+port)
    }
)