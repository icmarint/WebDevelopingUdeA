const dataJson = require("./inventario.json")

const {MongoClient} = require("mongodb")

const namedb = "tiendaMisionTic"
const url = "mongodb+srv://userudea:0trAwY7ibKMnPSGn@cluster0.xbaqegw.mongodb.net/"+namedb

const client = new MongoClient(url)

async function run(){
    try {
        await client.connect()
        .then(
            (db)=>{
                console.log("Conexión exitosa")
                console.log(db)
            }
        ).catch(
            (db)=>{
                console.log("Hubo un error al conectarse")
                console.log(db)
            }
        );
            const db = client.db(namedb)
            await db.command({ping:1})
            .then(
                (db)=>{
                    console.log("Conexión exitosa")
                    console.log(db)
                }
            ).catch(
                (db)=>{
                    console.log("Hubo un error al conectarse a la conexión de base de datos")
                    console.log(db)
                }
            );

            const collection = db.collection("productos")

            var documento =
            {
                "producto":"tomate de arbol",
                "precio":1800,
                "tags":["casa","fruta"],
                "proveedor":{
                    "nombre":"agro campo",
                    "precio":800
                }
            }

            /* INSERT DATA JSON
            await collection.insertOne(documento)
            .then(
                (rep)=>{
                    console.log("Inserto bien el documento")
                    console.log(rep)
                }
            ).catch(
                (err)=>{
                    console.log("Insertó mal el documento")
                    console.log(err)
                }
            )

            await collection.insertMany(dataJson)
            .then(
                (rep)=>{
                    console.log("Inserto bien el documento")
                    console.log(rep)
                }
            ).catch(
                (err)=>{
                    console.log("Insertó mal el documento")
                    console.log(err)
                }
            ) */

            /* //HACER UNA BÚSQUEDA EN BASE DE DATOS:
            var query =
            {
                //"producto":"Manzana"
                "precio":{$lte:1200}
            }

            await collection.findOne(query)
            .then(
                (rep)=>{
                    console.log("Consulta exitosa")
                    console.log(rep)
                }
            )
            .catch(
                (error)=>{
                    console.log("Hubo un error en la consulta")
                    console.log(error)
                }
            )

            const resultados = collection.find(query,{projection:{"tags":1, "producto":1}})

            console.log("Esto es del For Each")
            await resultados.forEach( elemen =>{
                console.log(elemen)
            }) */


            //BUSCAR Y ACTUALIZAR
            var query =
            {
                "precio":{$lte:2000}
            }

            await collection.findOneAndUpdate(query,{$set:{"precio":2000},$inc:{"cantidad":5}})
            .then(
                (rep)=>{
                    console.log("Update exitoso")
                    console.log(rep)
                }
            )


            /* //BORRAR
            var query =
            {
                "precio":{$lte:2000}
            }
            await collection.findOneAndDelete({})
            .then(
                (rep)=>{
                    console.log("Delete exitoso")
                    console.log(rep)
                }
            ).catch(
                (rep)=>{
                    console.log("Delete NO exitoso")
                    console.log(rep)
                }
            ) */

            /* //AGRUPAR (SUMAR)
            await collection.aggregate(
                [
                    {$match:{"precio":{$lte:5000}}},
                    {$group:{"_id":"$producto","total suma":{$sum:"$precio"}}}
                ]
            ).forEach(
                elem =>{
                    console.log(elem)
                }
            ) */

    } catch (error){
        console.log("Hubo un error")
    }finally{
        await client.close()
    }
}

run()

