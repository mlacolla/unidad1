// ciclos por repeticion al saber cantidad de veces a repetir
for (let i = 0; i < 5; i++) {
    console.log("Repetir");
}
// ciclos condicionales while, simpre que la condicion sea verdadera

const contra = "0123"
let login = prompt("Ingrese su contraseña: ");

while (login != contra) {
    login = prompt("Ingrese su contraseña: ");
}
