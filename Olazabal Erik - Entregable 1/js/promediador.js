/* ------------- Trabajo 2 Entregable ------------- */

let inicio = alert("Bienvenido al Promediador de notas");
let confirmacion = prompt("Si necesita saber su promedio escriba (SI)");

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
alert("Gracias por utilizar el Promediador. hasta luego!!!!");