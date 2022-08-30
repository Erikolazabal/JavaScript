/* ------------- Trabajo 1 opcional ------------- */

let palabraInicio = prompt("Ingrese (inicio) para comenzar: ");
const palabra = "inicio";

    if( palabraInicio == palabra) {
        let seleccionarPuerta = prompt("Ingrese el color de la puerta que guste, para poder salir");
        
                switch(seleccionarPuerta) {
                    case "azul": 
                        console.log("Casii!");
                        break;
                    case "amarillo":
                        console.log("Mejor proba con otra puerta");
                        break;
                    case "rojo":
                        let paraSalir = prompt("Felicitaciones GANASTE!!! , ingresa Esc:  (Para salir )");
                        while(paraSalir != "ESC"){
                            paraSalir = prompt("Ingrese un ESC:  (Para salir )");
                        }
                        break;
                    case "verde":
                        console.log("Es la de aladooooo!");
                        break;
                    default: 
                    console.log("la palabra ingresada es incorrecta");
                        break;
            }
    }else {
        palabraInicio = prompt("Ingresastre la palabra solicitada correctamente porfavor");
    }

/*  let paraSalir = prompt("Ingrese un Esc:  (Para salir )");

    while(paraSalir != "ESC"){
        paraSalir = prompt("Ingrese un ESC:  (Para salir )");
    } */


// let seleccionarPuerta = prompt("Ingrese el color de la puerta que guste, para poder salir");
// while(seleccionarPuerta != "azul" && seleccionarPuerta != "amarillo" && seleccionarPuerta != "rojo" && seleccionarPuerta !="verde"){
//     seleccionarPuerta = prompt("Ingrese el color de la puerta que guste, para poder salir");
// }
// let valorDos = parseInt(prompt("Ingrese el segundo valor: "));


// switch(seleccionarPuerta) {
//     case "+": 
//         console.log(seleccionarPuerta + valorDos);
//         break;
//     case "-":
//         console.log(seleccionarPuerta - valorDos);
//         break;
//     case "*":
//         console.log(seleccionarPuerta * valorDos);
//         break;
//     case "/":
//         console.log(seleccionarPuerta / valorDos);
//         break;
//     default: 
//         console.log("Rata! Escribi bien!");
//         break;
// }
