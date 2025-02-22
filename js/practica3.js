// Para introducir los datos puedes apoyarte de la función prompt() mientras que para la salida utilizarás de momento alert() o console.log()

// 1) Crear una función que solicite los datos de entrada

// function  ingreseNombre (nombre){
// return console.log("Hola " + nombre);
// return alert("Hola " + nombre);
// }

//  const nombre = prompt("Ingrese su nombre: ");
//  ingreseNombre(nombre);

//Devuelve nombre configurado por codigo.
// function  ingreseNombre (nombre){
//     return console.log("Hola " + nombre);
// }

// ingreseNombre("Mica");


// 2) Crear una función que procese la información obtenida.

// function sumar (a, b){
// return a + b;
// }
// let resultado = sumar(1,1);

// 3) Crear una función para mostrar el resultado final 

//Datos hardcoreados 


// function sumar (a, b){
//     return a + b;
//     }
//     let resultado2 = sumar(3,1);
//   alert('El resultado es: '+ resultado2);


//datos ingresados por el usuario.


function sumar(numero1, numero2) {
    return numero1 + numero2;
}

let numero1 = prompt("Ingrese numero : ");
numero1 = Number(numero1);
let numero2 = prompt("Ingrese numero a sumar : ");
numero2 = Number(numero2);

let resultado2 = sumar(numero1,numero2);
//alert('El resultado es: ' + resultado2);

alert('El resultado de la suma de : '+numero1+ ' y '+ numero2+ ' es: ' + resultado2);