const apikey = "9AQXbRvZYaF32w4GyAKpHGF13dYKHOlT";
const url = "api.giphy.com/v1/gifs/random";

const fechtApi = fetch(url+"?api_key="+apikey);

async function peticionAsync(){
    await fechtApi.then(
        (dato)=>dato.json()
    )
    .then(
        (dato)=>{
            let crearimg = document.createElement("img")
            crearimg.src = dato.data.images.original.url
            document.body.append(crearimg)
            console.log(dato.data.images.original.url)
        }
    )

    let elementop = document.createElement("p")
    elementop.innerHTML +="</br> No espera al fetch</br>"
    document.body.append(elementop)
}

peticionAsync()