// 1) Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.

// Pedir al usuario que ingrese un número inicial
let numeroInicial = prompt("Ingresa un número inicial:");
numeroInicial = Number(numeroInicial)

// Pedir al usuario que ingrese el número a sumar en cada repetición
let incremento = prompt("Ingresa el número a sumar en cada repetición:");
incremento = Number(incremento)

// Pedir al usuario que ingrese la cantidad de repeticiones
let repeticiones = prompt("Ingresa la cantidad de repeticiones:");
repeticiones = Number(repeticiones)

// Realizar la suma y mostrar el resultado en cada iteración
for (let i = 0; i < repeticiones; i++) {
    numeroInicial += incremento;
    console.log(`Resultado después de la repetición ${i + 1}: ${numeroInicial}`);
}

// //Suma dos valores
// let numero1 = prompt("Ingrese su número: ");
// numero1 = Number(numero1)

// let numero2 = prompt("Ingrese su número: ");
// numero2 = Number(numero2)

// resultadoSuma = numero1 + numero2 ;
// console.log(resultadoSuma)



// 2) Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

// const salida = "ESC"
// let textoUsuario = prompt("Ingrese su texto: ");
// console.log(textoUsuario)
// let textoUConcatenado;
// textoUConcatenado += " "+textoUsuario + " ";

// while (textoUsuario != salida) {
//     textoUsuario = prompt("Ingrese su texto: ");
//     textoUConcatenado += " "+textoUsuario + " ";
//     console.log(textoUsuario)
//  }

// console.log(textoUConcatenado)

//profe
const salida = "ESC"
let textoUsuario = prompt("Ingrese su texto: ");
console.log(textoUsuario)
let textoUConcatenado= "";
textoUConcatenado += " "+textoUsuario + " ";

while (textoUsuario != salida) {
    textoUsuario = prompt("Ingrese su texto: ");
    textoUConcatenado += " "+textoUsuario + " ";
    console.log(textoUsuario)
 }

console.log(textoUConcatenado)
// // 3) Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces
// let numero = prompt("Ingrese un número: ");
// for (i = 0; i < numero; i++) {
//     console.log("Repetir");
// }
