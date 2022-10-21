// 2 3 4 1
// 2 3 4 4
// 2 3 3 4
// 2 2 3 4
// 1 2 3 4

//Es un arreglo ordenado a excepción de
//la última posición.
// 1. Variable último valor
// 2. Tamaño del arreglo
// 3. Recorrer el arreglo de atrás a adelante
// Recorrer desde n-2 y empezar a comparar
// En la primera iteración, comparar si n-1
// es menor que n-2, si es así, reemplazar n-1
// por n-2.
//En la siguiente iteración, si n-2 es menor
//que n-3, reemplazar n-2 por n-3, y así sucesivamente.
//Hay una bandera, si sigue siendo false,
//en la posición 0, entonces ubico el
//número en la primera posisción.

//import{datosreto} from './data.js'
import datosreto from './data.js'

export function resolver(arr){
    let pasos = []
    let bandera = false
    let n_array = arr.length
    let valor_ubicar = arr[n_array-1]
    for(let i = n_array-2; i >= 0; i--){
        if(valor_ubicar < arr[i]){
            arr[i+1] = arr[i]
        }else{
            arr[i+1] = valor_ubicar
            bandera = true
            break
        }
        pasos.push(printArray(arr))
    }

    if(bandera===false){
        arr[0] = valor_ubicar
    }
    pasos.push(printArray(arr))
    return pasos
}

function printArray(arr){
    //elementp.innerHTML+=arr + "</br>"
    return arr+"</br>"
}

/* var elementp = document.getElementById("myP")

for(let i=0 ; i<datosreto.length; i++){
    let n_array = datosreto[i]["n_array"]
    let numeros = datosreto[i]["numeros"]

    elementp.innerHTML +="</br>"+"n = "+n_array +"numeros = " +"</br>"

    resolver(numeros)
    //resolver([2,3,4,5,6,7,4])
}


//Retornar objeto que cumple condición (find)
const getElemnt = (numeroN) => {
    return datosreto.find(
        (elementoArray)=>elementoArray["n_array"]==numeroN
    )
}

let objeto_find = getElemnt(8)

console.log(objeto_find)
elementp.innerHTML += "Elemento encontrado con n array "+ objeto_find["n_array"]+" y array "+objeto_find["numeros"]+"</br>"

//Retornar lista que cumple condición (filter)
const getElemntFilter = (numeroN) => {
    return datosreto.filter(
        (elementoArray)=>elementoArray["n_array"]==numeroN
    )
}

let objeto_filter = getElemntFilter(5)

console.log(objeto_filter)

for(let i=0; i<objeto_filter.length; i++){
    elementp.innerHTML += "Elemento encontrado en la posición "+ i +"con n array "+objeto_filter[i]["n_array"]+" y array "+objeto_filter[i]["numeros"]+"</br>"
} */
