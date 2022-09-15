/* ------------- Trabajo 2 Entregable ------------- */


class Alumnos {
    constructor(nombreAlumno, promedio) {
        this.nombreAlumno = nombreAlumno;
        this.promedio = promedio;
    }
}

const alumnoErik = new Alumnos("erik", 10);
const alumnoRaul = new Alumnos("raul", 1);
const alumnoJuan = new Alumnos("juan", 5);
const alumnoPaul = new Alumnos("paul", 9);


const arrayAlumnos = [alumnoJuan , alumnoPaul];

arrayAlumnos.push(alumnoErik);
arrayAlumnos.push(alumnoRaul);

console.log(arrayAlumnos);

// Menú de Promediador :

function menu() {
    alert("Bienvenido al Promediador de notas");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Ingresar nuevo alumno \n 2) Sacar un promedio de 3 notas \n 3) Eliminar usuario \n 4) Buscar el promedio de un alumno \n 5) Ver aprobados y desaprobados \n 6) Salir"));
    return opcion;
}

//Función para promediar dos notas 

function nuevoAlumno() {
    let nombreAlumno = prompt("Ingrese su nombre: ");
    let promedio = parseInt(prompt("Ingrese su Promedio " + nombreAlumno));
    let Alumno = new Alumnos(nombreAlumno, promedio);
    arrayAlumnos.push(Alumno);
    console.log(arrayAlumnos);
}

//Función para promediar tres notas 

function promedioTres() {
    let nombreAlumno = prompt("Ingrese su nombre: ");
    let notaUno = parseInt(prompt("Ingrese su Primer nota " + nombreAlumno));
    alert("Su Primera nota es " + notaUno)
    let notaDos = parseInt(prompt("Ingrese su segunda nota " + nombreAlumno));
    alert("Su Segunda nota es " + notaDos)
    let notaTres = parseInt(prompt("Ingrese su segunda nota " + nombreAlumno));
    let promedio = (notaUno + notaDos + notaTres) / 3;
    alert(promedio.toFixed(2))
    let Alumno = new Alumnos(nombreAlumno, promedio);
    arrayAlumnos.push(Alumno);
    console.log(arrayAlumnos);
}

//Función para eliminar un alumno

function eliminarAlumno() {
    let nombreAlumno = prompt("Ingrese tu nombre: ");
    let Alumno = arrayAlumnos.find(Alumno => Alumno.nombreAlumno == nombreAlumno);
    let borrado = arrayAlumnos.indexOf(Alumno);
    arrayAlumnos.splice(borrado, 1);
    console.log(arrayAlumnos);
}

//Función para buscar un promedio:

function saber() {
    let nombreAlumno = (prompt("Ingrese el nombre del alumno para ver su promedio: "));
    let proTotal = arrayAlumnos.find(proTotal => proTotal.nombreAlumno === nombreAlumno);
    console.log(proTotal);
}

//Función para Filtrar :

function Filtrar() {
    let calificacionesApro = arrayAlumnos.filter( Alumno => Alumno.promedio > 6);
    let calificacionesDes = arrayAlumnos.filter( Alumno => Alumno.promedio < 6);
    console.log("Aprobados: ");
    console.log(calificacionesApro);
    console.log("Desaprobados: ");
    console.log(calificacionesDes);
}

//Función para salir del promediador:

function salir() {
    alert("Gracias por utilizar el Promediador. hasta luego!!!!");
}


//switch:

let opcion = menu();
switch (opcion) {
    case 1:
        nuevoAlumno();
        break;
    case 2:
        promedioTres();
        break;
    case 3:
        eliminarAlumno();
        break;
    case 4:
        saber();
        break;
    case 5:
        Filtrar();
        break;
    case 6:
        salir();
        break;
    default:
        alert("La opcion ingresada no es correcta");
        break;
}






/* let confirmacion = prompt("Si necesita saber su promedio escriba (SI)");

if(confirmacion === "SI"){
    const nombreAlumno = prompt("Ingrese su nombre: ");
    const notaUno = parseInt(prompt("Ingrese su Primer nota " + nombreAlumno));
    alert("Su Primera nota es " + notaUno)
    const notaDos = parseInt(prompt("Ingrese su segunda nota " + nombreAlumno));
    alert("Su Segunda nota es " + notaDos)
    const notaTres = parseInt(prompt("Ingrese su tercera nota " + nombreAlumno));
    let promedio = (notaUno + notaDos + notaTres) / 3;
        if(promedio === 10){
            alert("Excelente " + nombreAlumno + " tu calificación es de " + promedio);
        }else if (promedio >= 7 && promedio < 10){
            alert("Bastante bien " + nombreAlumno + " tu calificación es de " + promedio);
        }else if (promedio >=1 && promedio < 7) {
            alert("Malas noticias " + nombreAlumno + " tu calificación es de " + promedio + "no es suficiente para aprobar");
        }else {
            alert("Alguna de las notas que ingresaste esta mal para realizar el promedio");
        } 
    }
    else{
        alert("La opcion escrita no es la solicitada para realiazar el promedio.");
    }
alert("Gracias por utilizar el Promediador. hasta luego!!!!"); */