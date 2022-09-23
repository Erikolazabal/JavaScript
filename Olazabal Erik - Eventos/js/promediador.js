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

//  Añadir nuevo alumno

const miFormulario =document.getElementById("miFormulario");
        miFormulario.addEventListener("submit", (e) =>{
            e.preventDefault();
            const nombreAlumno = document.getElementById("formNombre");
            const promedio = document.getElementById("formApellido");
            const Alumno = new Alumnos(nombreAlumno.value, promedio.value);
            arrayAlumnos.push(Alumno);
            miFormulario.reset();
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
        });

//Función para promediar tres notas 
    function promediodea3() {
            let nombreAlumno = document.getElementById("promNombre");
            const Alumno = new Alumnos(nombreAlumno);
            arrayAlumnos.push(Alumno);
            let promNota1 = document.getElementById("promNota1").value;
            let promNota2 = document.getElementById("promNota2").value;
            let promNota3 = document.getElementById("promNota3").value;
            let promedio = (parseFloat(promNota1)+parseFloat(promNota2)+parseFloat(promNota3))/3;
            document.getElementById("Promedio").innerHTML = `<div class="card" style="width: 18rem;">
            <img src="https://img.freepik.com/vector-premium/retrato-alumno-adolescente-icono-circulo-aislado-personaje-masculino-sonrisa-cara-companero-clase-o-colegial-sueter-perfil-o-avatar-medios-adolescente-positivo-vector-chico-inteligente-estilo-plano_87689-2399.jpg?w=2000" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"> ${document.write.nombreAlumno} </h5>
            <p class="card-text"> Promedio : ${promedio} </p>
        </div>
        </div>`;
    }

//Función para eliminar un alumno

const formEliminar =document.getElementById("formEliminar");

function formEliminar1() {
    const nombreAlumno = document.getElementById("formNombre");
    let Alumno = arrayAlumnos.find(Alumno => Alumno.nombreAlumno === nombreAlumno);
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

/* function saber() {
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
} */

//Función para Filtrar :

function verNotas() {
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



