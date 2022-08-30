/** CICLOS / BUCLES / ITERACIONES ***/

//¿Qué es un ciclo y para que sirve? 

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//Los ciclos son herramientas que nos permiten repetir un bloque de instrucciones cierta cantidad de veces. 

/* ¿Qué tipos de Ciclos tenemos en JS?*/

//Dividimos en dos categorías: Ciclos por conteo y Ciclos condicionales. 
//Ciclos por conteo: for. 
//Ciclos condicional: while y Do While. 

/** CICLO FOR **/
//Generalmente lo voy a usar cuando se la cantidad de repeticiones que debe tener mi código.

/* 
for (desde; hasta; actualización) {
    // código que se repite. 
    // ejemplo: console.log();
}
*/

//Ejemplo A. Quiero mostrar "Hola Mundo" 10 veces por consola. 

console.log("Ejemplo A: ");

for(let i = 0 ; i < 10; i = i + 1) {
    console.log("Hola Mundo", i);
}

//console.log(i);

//Ejemplo B. Si quiero que comience a contar desde 1 y que incluya al 10. 

console.log("Ejemplo B: ");

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

//Ejemplo C. Si quiero que cuente desde 10 hasta 0. 

console.log("Ejemplo C: ");

for(let i = 10; i >= 0; i = i - 1) {
    console.log(i);
}


//Ejemplo D. Si quiero mostrar por consola los números pares entre 0 y 10. 

console.log("Ejemplo D: ");

for(let i = 0; i <= 10; i = i + 2) {
    console.log(i);
}

//Ejemplo Stefano: 

console.log("Ejemplo Stefano: ");

for(let i = 0 ; i <= 10 ; i++) {
    if(i % 2 !== 0){
        console.log(i, "Es impar");
    }
}

//Sentencia break: me permite interrumpir el ciclo. 

//Ejemplo E: Pido una contraseña al usuario hasta que la ingrese correctamente. 
/*
console.log("Ejemplo E: ");

let passwordUsuario = parseInt(prompt("Ingrese su contraseña: "));
const passwordAutorizado = 1234;

for(let i = 0; i < 2; i++) {
    if(passwordUsuario === passwordAutorizado) {
        console.log("Contraseña correcta, muy bien amiguito!");
        break; 
    }else {
        passwordUsuario = prompt("Contraseña incorrecta, vuelva a intentar, rata!");
    }
}
*/

// Sentencia continue : Me permite saltear una iteración del ciclo. 

//Ejemplo F: muestro los números del 0 al 6 pero saltando los números pares. 

console.log("Ejemplo F: ");

for(let i = 0; i <= 6; i++) {
    if(i % 2 == 0){
        continue;
    }
    console.log(i);
}

// % nos retorna el resto de la división. 
//Si el resto es 0, es par. 
//Si el resto es 1, es impar. 

/** CICLOS WHILE ***/
//El ciclo While es un ciclo que se ejecuta mientras la condición evaluada sea verdadera. 

//Ejemplo del uso de While. 

/*
alert("Ejemplo G: ");

let nombre = prompt("Ingrese un nombre:  (Para salir ingrese salir)");

while(nombre != "salir"){
    console.log(nombre);
    nombre = prompt("Ingrese un nombre:  (Para salir ingrese salir)");
}
*/
//Cuidado con los ciclos infinitos. No se lo manden a sus tutores. 

/*** CICLO DO WHILE ***/
//La diferencia del ciclo Do While y el While, es que el Do While se ejecuta al menos una vez.

/*
alert("Ejemplo H: ");

const passAutorizado = 1234;
let passwordUsuario; 

do {
    passwordUsuario = prompt("Ingrese su contraseña");
}while(passwordUsuario != passAutorizado);
*/


/***** ESTRUCTURA SWITCH ****/
//Esta especialmente diseñada para manejar de forma sencilla multiples condiciones sobre la misma variable. 
/*
let clima = prompt("Ingrese el clima de su ciudad: ");

switch(clima){
    case "lluvia":
        console.log("Mira netflix tranquilo en tu casa");
        break;
    case "nublado":
        console.log("hermoso dia para un asado");
        break;
    case "soleado":
        console.log("Nos vamos a la playa");
        break;
    case "frio": 
        console.log("A mimir");
        break;
    default:
        console.log("¿Que pusiste? Escribi bien por favor, RATA!");
        break;
}
*/
//EJEMPLO CALCULADORA: 

let valorUno = parseInt(prompt("Ingrese el primer valor: "));
let operacion = prompt("Ingrese la operacion a realizar(+,-,*,/)");
while(operacion != "+" && operacion != "-" && operacion != "*" && operacion !="/"){
    operacion = prompt("Ingrese la operacion a realizar(+,-,*,/)");
}
let valorDos = parseInt(prompt("Ingrese el segundo valor: "));


switch(operacion) {
    case "+": 
        console.log(valorUno + valorDos);
        break;
    case "-":
        console.log(valorUno - valorDos);
        break;
    case "*":
        console.log(valorUno * valorDos);
        break;
    case "/":
        console.log(valorUno / valorDos);
        break;
    default: 
        console.log("Rata! Escribi bien!");
        break;
}


