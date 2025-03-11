const pacientes = [];
function ingresoDatosPaciente() {
    let nombrePaciente;
    let edadPaciente;
    let telefono;
    let fechaIngreso;
    let colegio;
    let consultaDiagnostico;
    let observaciones;
    let dniPaciente;

    while (!nombrePaciente) {
        nombrePaciente = prompt('Ingrese nombre del paciente: ');
        if (!nombrePaciente) {
            alert('El nombre del paciente es obligatorio. Por favor, ingrese un nombre.');
        }
    }

    while (true) {
        edadPaciente = prompt('Ingrese edad del paciente: ');

        if (!isNaN(edadPaciente) && edadPaciente > 0) {
            break;  // Sale del ciclo si la edad es válida
        } else {
            alert('Por favor, ingrese una edad válida (número mayor que 0).');
        }
    }


    while (true) {
        telefono = prompt('Ingrese telefono del paciente: ');

        if (!isNaN(telefono) && telefono > 0) {
            break;  // Sale del ciclo si la edad es válida
        } else {
            alert('Por favor, ingrese un telefono válida (número mayor que 0).');
        }
    }




    while (true) {
        fechaIngreso = prompt('La fecha de ingreso del paciente: ');
        if (fechaIngreso) {
            break;  // Sale del ciclo si el nombre es válido
        } else {
            alert('La fecha de ingreso del paciente es obligatorio.');
        }
    }

    while (true) {
        colegio = prompt('El colegio de ingreso del paciente: ');
        if (colegio) {
            break;  // Sale del ciclo si el nombre es válido
        } else {
            alert('El colegio de ingreso del paciente es obligatorio.');
        }
    }

    while (true) {
        consultaDiagnostico = prompt('Ingrese Consulta/diagnostico del paciente: ');
        if (consultaDiagnostico) {
            break;  // Sale del ciclo si el nombre es válido
        } else {
            alert('Es necesario ingresar un diagnóstico.');
        }
    }


    observaciones = prompt('Observaciones: ');


    while (true) {
        dniPaciente = prompt('Ingrese DNI  del paciente: ');
        if (dniPaciente) {
            break;  // Sale del ciclo si el nombre es válido
        } else {
            alert('Es necesario ingresar un DNI.');
        }
    }

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

function mostrarPacientes() {
    let datosFinal = ''

    for (let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i]
        datosFinal += `\nNombre paciente:  ${paciente.nombre} \n`
        datosFinal += `Paciente DNI:  ${paciente.dniPaciente} \n`
    }

    alert(` Paciente ingresados: \n${datosFinal}  `);
  

}

