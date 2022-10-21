import {resolver} from './reto.js'
const promesa = new Promise(

    (resolverPromesa,reject)=>{
        setTimeout(
            ()=>{
                let rep = resolver([1,2,3,5,4])
                //rep = null
                if(rep != null){
                    resolverPromesa(rep)
                }else{
                    reject("Hubo un error")
                }
            }
            ,
            5000
        )
    }
)

promesa.then(
    (rep)=>{
        let elementp = document.getElementById("myP")
        elementp.innerHTML += "</br>"
        elementp.innerHTML += "El resultado es: </br>"
        for(let i = 0; i< rep.length; i++){
            elementp.innerHTML += rep[i]
        }
    }
)

promesa.catch(
    (rep)=> {
        alert(rep)
    }
)

elementp.innerHTML +="</br> Promesa no resuelta: </br>"