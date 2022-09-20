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

const contenedorBoots = document.getElementById("contenedorBoots");


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
    arrayAlumnos.forEach(Alumnos => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="https://img.freepik.com/vector-premium/retrato-alumno-adolescente-icono-circulo-aislado-personaje-masculino-sonrisa-cara-companero-clase-o-colegial-sueter-perfil-o-avatar-medios-adolescente-positivo-vector-chico-inteligente-estilo-plano_87689-2399.jpg?w=2000" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> ${Alumnos.nombreAlumno} </h5>
                            <p class="card-text"> Promedio : ${Alumnos.promedio.toFixed(2)} </p>
                        </div>
                        </div>`;
    
        contenedorBoots.appendChild(div);
    })
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
    arrayAlumnos.forEach(Alumnos => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="https://img.freepik.com/vector-premium/retrato-alumno-adolescente-icono-circulo-aislado-personaje-masculino-sonrisa-cara-companero-clase-o-colegial-sueter-perfil-o-avatar-medios-adolescente-positivo-vector-chico-inteligente-estilo-plano_87689-2399.jpg?w=2000" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> ${Alumnos.nombreAlumno} </h5>
                            <p class="card-text"> Promedio : ${Alumnos.promedio.toFixed(2)} </p>
                        </div>
                        </div>`;
    
        contenedorBoots.appendChild(div);
    })
}

//Función para eliminar un alumno

function eliminarAlumno() {
    let nombreAlumno = prompt("Ingrese tu nombre: ");
    let Alumno = arrayAlumnos.find(Alumno => Alumno.nombreAlumno == nombreAlumno);
    let borrado = arrayAlumnos.indexOf(Alumno);
    arrayAlumnos.splice(borrado, 1);
    arrayAlumnos.forEach(Alumnos => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="https://img.freepik.com/vector-premium/retrato-alumno-adolescente-icono-circulo-aislado-personaje-masculino-sonrisa-cara-companero-clase-o-colegial-sueter-perfil-o-avatar-medios-adolescente-positivo-vector-chico-inteligente-estilo-plano_87689-2399.jpg?w=2000" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> ${Alumnos.nombreAlumno} </h5>
                            <p class="card-text"> Promedio : ${Alumnos.promedio} </p>
                        </div>
                        </div>`;
    
        contenedorBoots.appendChild(div);
    })
}

//Función para buscar un promedio:

function saber() {
    let nombreAlumno = (prompt("Ingrese el nombre del alumno para ver su promedio: "));
    let proTotal = arrayAlumnos.find(proTotal => proTotal.nombreAlumno === nombreAlumno);
        let div = document.createElement("div");
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="https://img.freepik.com/vector-premium/retrato-alumno-adolescente-icono-circulo-aislado-personaje-masculino-sonrisa-cara-companero-clase-o-colegial-sueter-perfil-o-avatar-medios-adolescente-positivo-vector-chico-inteligente-estilo-plano_87689-2399.jpg?w=2000" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> ${proTotal.nombreAlumno} </h5>
                            <p class="card-text"> Promedio : ${proTotal.promedio} </p>
                        </div>
                        </div>`;
    
        contenedorBoots.appendChild(div);
}

//Función para Filtrar :

function Filtrar() {
    let calificacionesApro = arrayAlumnos.filter( Alumno => Alumno.promedio > 6);
    let calificacionesDes = arrayAlumnos.filter( Alumno => Alumno.promedio < 6);
    const contenedorApro = document.getElementById("contenedorApro");
    calificacionesApro.forEach(Alumnos => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="divisorApro">
                        <div class="card" style="width: 18rem;">
                            <img src="https://img.freepik.com/vector-premium/retrato-alumno-adolescente-icono-circulo-aislado-personaje-masculino-sonrisa-cara-companero-clase-o-colegial-sueter-perfil-o-avatar-medios-adolescente-positivo-vector-chico-inteligente-estilo-plano_87689-2399.jpg?w=2000" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> ${Alumnos.nombreAlumno} </h5>
                            <p class="card-text"> Promedio : ${Alumnos.promedio} </p>
                        </div>
                        </div>
                        </div>`;
    
        contenedorApro.appendChild(div);
    })
    const contenedorDes = document.getElementById("contenedorDes");
    calificacionesDes.forEach(Alumnos => {
        let div = document.createElement("div");
        div.innerHTML = `<div class=" divisorDes">
                            <div class="card" style="width: 18rem;">
                            <img src="https://img.freepik.com/vector-premium/retrato-alumno-adolescente-icono-circulo-aislado-personaje-masculino-sonrisa-cara-companero-clase-o-colegial-sueter-perfil-o-avatar-medios-adolescente-positivo-vector-chico-inteligente-estilo-plano_87689-2399.jpg?w=2000" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> ${Alumnos.nombreAlumno} </h5>
                            <p class="card-text"> Promedio : ${Alumnos.promedio} </p>
                        </div>
                        </div>
                        </div>`;
    
        contenedorDes.appendChild(div);
    })
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


