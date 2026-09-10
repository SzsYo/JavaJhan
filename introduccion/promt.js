
/* Ejercicio usando la funcion promt con operadores
 */
/* let numero1 = parseFloat(prompt("ingresar el primer numero"));

let numero2 = parseFloat(prompt("ingresar el segundo numero"));

let suma = numero1 + numero2;

alert("el resultado de la suma es: " + suma);
 */

/* let numero1 = parseFloat(prompt("ingresar el primer numero"));

let numero2 = parseFloat(prompt("ingresar el segundo numero"));

let resta = numero1 - numero2;

alert("el resultado de la resta es: " + resta);
 */

/* let numero1 = parseFloat(prompt("ingresar el primer numero"));

let numero2 = parseFloat(prompt("ingresar el segundo numero"));

let multiplicacion = numero1 * numero2;

alert("el resultado de la multiplicacion es: " + multiplicacion);
 */
/* 
let numero1 = parseFloat(prompt("ingresar el primer numero"));

let numero2 = parseFloat(prompt("ingresar el segundo numero"));

let division = numero1 / numero2;

alert("el resultado de la division es: " + division); */

/* asignacion dinamica interaccion con el usuario */
/* 
let  nombre = prompt("ingresar el nombre del usuario");

console.log("el nombre del usuario es: " + nombre);

alert("el nombre del usuario es: " + nombre); */


/* tipos de datos primativos */

/* console.log (typeof 42); 
console.log (typeof "hola mundo");
console.log (typeof true); */

/* 
let edad = 25;
let precio = 19.99;
console.log (typeof edad);
console.log (typeof precio);
 */


/* 2. Tipos de datos de tipo objeto: Son estructuras más complejas:
• Pueden contener múltiples valores
• Permiten propiedades (datos) y métodos (funciones)
o Object (Objeto): Es la estructura base para representar datos organizados en pares clave:
valor. */

let persona = {
    nombre : 'ana',
    edad : 30,
    saludar: function() {
        return 'hola';
    }
};

console.log(persona.nombre);

/* Array (arreglo): es un objeto especial para almacenar colecciones ordenadas. */

let numeros = [10,20,30,40];

console.log(numeros[0]); // Acceder al primer elemento del arreglo



/* 
Function (función): son objetos (de primera clase), es decir guarda las funciones en
variables, pasarlas como parámetros, retornarlas desde otras funciones. */


function sumar(a, b){
    return a+b;
}

console.log(typeof sumar); // Muestra "function"



/* Date: representa fechas y horas. */

let fecha = new Date();
console.log(fecha.getFullYear());





// Operadores aritméticos
let a = 10;
let b = 5;
console.log(a + b); // 15 (suma)
console.log(a % b); // 0 (módulo) console.log(a** b); // 100000 (exponenciación)
// Operadores de comparación
console.log(a == 10); // true (igualdad)
console.log(a === "10"); // false (igualdad estricta) console.log(a> b); // true (mayor que)
// Operadores lógicos
let esMayor = a > b;
let espar = a % 2 === 0;
console.log(esMayor && espar); // true (AND)
console.log(!esMayor); // false (NOT)
// Operadores de asignación
let c = 20;
c+= 10; // c = c + 10
console.log(c); // 30


/* subi todos los cambios nuevos  */