//Nombre mayor de edad
// const usuarios = [
//     { nombre: "Mica", edad: 33 },
//     { nombre: "Pollux", edad: 0 },
//     { nombre: "Castor", edad: 15 }

// ]
// for (let i = 0; i < usuarios.length; i++) {
//     if (usuarios[i].edad > 18) {
//         console.log(usuarios[i].nombre);
//     }
// }

// Acepta terminos. 
const usuarios = [
    { nombre: "Mica", edad: 33, aceptoTerminos:false},
    { nombre: "Pollux", edad: 0 ,aceptoTerminos:true},
    { nombre: "Castor", edad: 15, aceptoTerminos:true},
    { nombre: "Soe", edad: 55 , aceptoTerminos:true}

]
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad > 18 && usuarios[i].aceptoTerminos) {
        console.log(usuarios[i].nombre);
    }
}