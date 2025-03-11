
//ejecuta siempre el while hasta que sea false. 
let continua = true;
while(continua===true){
    ingresoDatosPaciente();
    continua=confirm ('¿Desea continuar ingresando otro paciente?')
}


mostrarPacientes();
