/* alert("hola mundo");

var variable_1 = "Hola mundo";

alert(variable_1);

var variable_2 = 0;

alert(variable_1);
alert(variable_2);

variable_2 = variable_1 + variable_2;

alert(variable_1);

variable_2 = variable_2 + 10;

alert(variable_2);

variable_2 = variable_2 + "10";

alert(variable_2);

console.log(variable_2);

var arepas = ["Arepa rellena", "Arepa con queso", "Arepa sencilla"];

console.log(arepas[1]);

arepas[1] = "Arepa con carne";

console.log(arepas);

arepas.push("Arepa");

console.log(arepas); */


if (1 != 1){
    console.log("esto es verdadero")
}else{
    console.log("esto es falso")
}

if (1 != 1){
    console.log("esto es verdadero")
}else if(2==2){
    console.log("esto es verdadero x 2")
}


//Salta a error por ser estricto el tipo de dato con ===
if (1 != 1){
    console.log("esto es verdadero")
}else if(2==="2"){
    console.log("esto es verdadero x 2")
}else{
    console.log("error")
}

//Funciona por ser estricto el tipo de dato con ===
if (1 != 1){
    console.log("esto es verdadero")
}else if(2===2){
    console.log("esto es verdadero x 2")
}else{
    console.log("error")
}


//Ciclo for
let areparellena = 5000;
let arepaQueso = 10000;
let arepaCarne = 15000;

let bolsillo = 12000;

valoresArepas = [areparellena, arepaQueso, arepaCarne];

for(let i = 0; i<valoresArepas.length; i++){
    console.log(valoresArepas[i])
    if(bolsillo >= valoresArepas[i]){
        console.log("Puedo comprar una arepa de valor "+valoresArepas[i])
    }
}

//Dato curioso:
const resultado = 9 + '1'
const resultado2 = 9 - '1'
console.log(resultado)
console.log(resultado2)

//Palabra alrevés
var palabra_ingresada = "coderbyte"

var palabra_alreves = ""

for(var i = palabra_ingresada.length-1; i >= 0; i--){
    palabra_alreves = palabra_alreves + palabra_ingresada[i]
}

console.log(palabra_alreves)

//Mostrar en HTML

var elementp = document.getElementById("myP")

console.log(elementp)

console.log(elementp.innerHTML)

elementp.innerHTML="<p>" + palabra_alreves + "</p>"