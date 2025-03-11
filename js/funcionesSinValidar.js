//cracion del array nombre en plural.
const pacientes = [];
//funcion
function ingresoDatosPaciente() {


    const nombrePaciente = prompt('Ingrese nombre del paciente: ');

    const edadPaciente = Number(prompt('Ingrese edad del paciente: '));

    const telefono = parseInt(prompt('Ingrese telefono del paciente-tutor: '));

    const fechaIngreso = prompt('Seleccione la fecha de ingreso: ');

    const colegio = prompt('Ingrese colegio del paciente: ');

    const consultaDiagnostico = prompt('Ingrese Consulta/diagnostico del paciente: ');

    const observaciones = prompt('Observaciones: ');

    const dniPaciente = prompt('Ingrese DNI  del paciente: ');


    //cargo el array - key:valor (nombre es un objeto)
    pacientes.push({
        nombre: nombrePaciente,
        edad: edadPaciente,
        telefono: telefono,
        fechaIngreso: fechaIngreso,
        colegio: colegio,
        consultaDiagnostico: consultaDiagnostico,
        observaciones: observaciones,
        dniPaciente: dniPaciente
    });

    alert(`
        Paciente ingresado correctamente: 
        Nombre del paciente: ${nombrePaciente}, 
        DNI: ${dniPaciente}
        `);


};


//funcion mostrar los pacientes ingresados, luego de que en el alert se ponga cancelar. 

//para que no aparezca un alert por cada paciente ingresado al decidir no cargar mas pacientes. 
//crear variable datosFinal donde guarde datos de los pacientes y la muestre despues del for dentro de funcion mostrar pacientes. 


function mostrarPacientes() {
    let datosFinal = ''

    for (let i = 0; i < pacientes.length; i++) {
        //se crea variable paciente para guardar los datos en la posicion i en el array pacientes (primera vez en cero) 
        const paciente = pacientes[i]
        datosFinal += `\nNombre paciente:  ${paciente.nombre} \n`
        datosFinal += `Paciente DNI:  ${paciente.dniPaciente} \n`
    }

    alert(` Paciente ingresados: \n${datosFinal}  `);


}
