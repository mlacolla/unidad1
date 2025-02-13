//Muestra descuento actual + boton cambia valor del descuento
const mensaje = document.getElementById('mensaje');
const boton = document.getElementById('cambiarDescuento');
let descuentoInicial;

const descuentoPredeterminado =10;
let descuentoActual = descuentoInicial ?? descuentoPredeterminado
mensaje.textContent =`El descuento es del ${descuentoActual}%`

boton.addEventListener(`click`, () => {
    let descuentoIngresado = prompt("Ingrese el descuento en porcentajes: ")
    descuentoIngresado = Number(descuentoIngresado)
    descuentoActual= descuentoIngresado ?? descuentoPredeterminado
    
    mensaje.textContent = `El descuento es del ${descuentoActual}%`

})

