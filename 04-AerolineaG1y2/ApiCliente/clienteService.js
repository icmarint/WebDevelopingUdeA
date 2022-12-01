let clientes = require("./clientes.json")

const clientesGet = () => {
    return clientes
}

const clientesgetId = (id) => {
    let cliente = clientes.find(
        (client)=>{
            return client.id === id
        }
    )
    return cliente
}

module.exports.clientesgetExport = clientesGet;
module.exports.clientesgetIdExport = clientesgetId;