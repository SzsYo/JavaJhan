 // Bucle for del 1 al 50 que incrementa de 2 en 2 desde el 2



/* for (let i = 2; i <= 50; i += 2) {
  console.log(i);
} */


/* let limite = parseInt(prompt("Ingresa un número positivo:"));
let suma = 0;
let i = 1;

while (i <= limite) {
  suma += i; 
  i++;
}

console.log("La suma acumulada de 1 a " + limite + " es: " + suma); */


/* let numero = parseInt(prompt("Ingresa un número del 1 al 10:"));

console.log("Tabla de multiplicar del " + numero + ":");
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
} */


/* let inicio = parseInt(prompt("Ingresa un número mayor a 0 para la cuenta regresiva:"));

while (inicio >= 0) {
  console.log(inicio);
  inicio--;
} */


/* let sumaTotal = 0;
let numeroIngresado;

do {
  numeroIngresado = parseFloat(prompt("Ingresa un número positivo (o un número negativo para terminar):"));
  
  if (numeroIngresado >= 0) {
    sumaTotal += numeroIngresado;
  }
} while (numeroIngresado >= 0);

console.log("La suma total de los números positivos ingresados es: " + sumaTotal); */



// Bucle for que inicia en 1 e incrementa de 2 en 2 hasta 100
/* for (let i = 1; i < 100; i += 2) {
  console.log(i);
} */



/* let opcion;

do {
  opcion = prompt(
    "MENÚ INTERACTIVO\n" +
    "1: Mostrar mensaje de bienvenida\n" +
    "2: Mostrar fecha y hora actual\n" +
    "3: Salir\n\n" +
    "Elige una opción (1, 2 o 3):"
  );

  if (opcion === "1") {
    alert("¡Hola! Te damos la bienvenida al programa.");
  } else if (opcion === "2") {
    alert("Fecha y hora actual: " + new Date().toLocaleString());
  } else if (opcion === "3") {
    alert("Saliendo del programa... ¡Hasta luego!");
  } else {
    alert("Opción no válida. Por favor, elige 1, 2 o 3.");
  }

} while (opcion !== "3");
 */
/* control de flujo  */

/* 
let numeros = [3, 5, 2, 7, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 7) {
    console.log("Se encontró el 7. Deteniendo el bucle.");
    break; 
  }
  console.log("Número: " + numeros[i]);
} */

/* 
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; // Salta los números impares y pasa a la siguiente iteración
  }
  console.log(i);
} */


/* let lista = [2, -5, 8, -1, 12, 4];

for (let i = 0; i < lista.length; i++) {
  let num = lista[i];

  // Si es negativo, lo ignora y pasa al siguiente
  if (num < 0) {
    continue;
  }

  // Si es mayor a 10, detiene el bucle por completo
  if (num > 10) {
    console.log("Se encontró un número mayor a 10 (" + num + "). Deteniendo...");
    break;
  }

  console.log("Número válido: " + num);
} */


