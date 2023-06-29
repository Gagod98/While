/**Crea un programa que pregunte al usuario un número. Mostrar los números 
 * que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
 */
let num;
num = parseInt(prompt("Ingresa un numero"));
let numI = 0;
console.log (numI + 1);

while (numI < num){
    numI = numI + 5;
    console.log (numI);
};


/**Crea un programa que solicite al usuario 2 números entre 1 y 50. 
 * Posteriormente mostrar en consola los números del 1 hasta el 50, 
 * pero añadir el mensaje 
 * “¡Lotería!” solo al mostrar los números indicados por el usuario. */


let num1;
num1 = parseInt(prompt("Ingresa un numero entre 1 y 50"));
let num2;
num2 = parseInt(prompt("Ingresa un numero entre 1 y 50"));
let cont = 0;

while (cont < 50){
    cont++
    if (num1 == cont || num2 == cont) {
        console.log (`!${cont} Loteria!`);
    }else{
        console.log (cont);
    };
};

/**Crea un programa que solicite al usuario números, si lo que este introduce 
 * es un número guardarlo en un arreglo. Para terminar el capturar el 
 * usuario debe ingresar el número 0. 
 * Finalmente mostrar la lista de números capturados en pantalla o en la consola. */


const cap = [];

let numsC

while (numsC != 0) {
    numsC = parseInt(prompt("Ingresa un numero, para salir usa 0"))
    cap.push (numsC);
}

console.log (`${cap} Este es tu arreglo`);

/**Crea un programa que solicite al usuario letras o palabras
 * si es así guardar el resultado. Para terminar de capturar el usuario no debe 
 * escribir valor alguno. Al terminar de capturar 
 * mostrar en pantalla la concatenación de todas las palabras capturadas. */

const palab = [];

let palabritas;

do { 
    palabritas = String(prompt("Ingresa letras o palabras"));
    palab.push (palabritas)
} 
while (palabritas != "");

console.log (palab);

/**Crea un programa que solicite al usuario un día de la semana 
 * (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado 
 * para cada día de la semana por medio de un alert. Y seguirá pidiendo 
 * al usuario introducir otro día. En caso de que el día introducido sea domingo 
 * mostrar al usuario el mensaje 
 * “Ve a descansar” y terminar la captura de información. */


let dia

do{
    dia = String(prompt("Ingresa un dia de la semana"));
    if (dia == "lunes") {
        alert ("Viaje antes que destino")
    }else if (dia == "martes") {
        alert ("Vida antes que muerte")
    }else if (dia == "miercoles") {
        alert ("Protegere incluos a aquellos que no quieran ser protegidos")
    }else if (dia == "jueves") {
        alert ("Fuerza Antes que debilidad")
    }else if (dia == "viernes") {
        alert ("El corazon es el musculo mas fuerte")
    }else if (dia == "sabado") {
        alert ("A veces un corazon frio necesita una sonrisa calurosa")
    };
}
while (dia != "domingo");

alert ("Ve a descansar");
    
