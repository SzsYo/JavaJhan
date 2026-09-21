  /*
  1) Números Pares
   Imprime en la consola todos los números pares del 1 al 50
   usando un bucle for.
   --------------------------------------------------------- */
function numerosPares() {
  console.log("=== Números Pares del 1 al 50 ===");
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
 
/* ---------------------------------------------------------
   2) Suma Acumulada
   Pide un número positivo y calcula, con un bucle while,
   la suma de todos los números desde 1 hasta ese número.
   --------------------------------------------------------- */
function sumaAcumulada() {
  let numero = parseInt(prompt("Ingresa un número positivo:"));
 
  while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Valor inválido. Ingresa un número positivo:"));
  }
 
  let suma = 0;
  let contador = 1;
  while (contador <= numero) {
    suma += contador;
    contador++;
  }
 
  console.log(`La suma de 1 a ${numero} es: ${suma}`);
}
 
/* 
   3) Adivina el Número
   Genera un número aleatorio entre 1 y 10 y usa un bucle
   do...while para pedir al usuario que lo adivine, hasta
   que acierte.*/
function adivinaElNumero() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intento;
 
  do {
    intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));
    if (intento !== numeroSecreto) {
      console.log("Incorrecto, intenta de nuevo.");
    }
  } while (intento !== numeroSecreto);
 
  console.log(`¡Correcto! El número era ${numeroSecreto}.`);
}
 
/* ---------------------------------------------------------
   4) Tabla de Multiplicar
   Pide un número del 1 al 10 y usa un bucle for para
   imprimir su tabla de multiplicar del 1 al 10.
   --------------------------------------------------------- */
function tablaDeMultiplicar() {
  let numero = parseInt(prompt("Ingresa un número del 1 al 10:"));
 
  while (isNaN(numero) || numero < 1 || numero > 10) {
    numero = parseInt(prompt("Valor inválido. Ingresa un número del 1 al 10:"));
  }
 
  console.log(`=== Tabla del ${numero} ===`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
 
/* ---------------------------------------------------------
   5) Cuenta Regresiva
   Pide un número mayor a 0 y usa un bucle while para
   mostrar una cuenta regresiva desde ese número hasta 0.
   --------------------------------------------------------- */
function cuentaRegresiva() {
  let numero = parseInt(prompt("Ingresa un número mayor a 0:"));
 
  while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Valor inválido. Ingresa un número mayor a 0:"));
  }
 
  console.log("=== Cuenta Regresiva ===");
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
}
 
/* ---------------------------------------------------------
   6) Suma de Números Positivos
   Usa un bucle do...while para pedir números positivos y
   sumarlos. Se detiene cuando el usuario ingresa un número
   negativo, y muestra la suma total.
   --------------------------------------------------------- */
function sumaDeNumerosPositivos() {
  let numero;
  let suma = 0;
 
  do {
    numero = parseInt(prompt("Ingresa un número positivo (uno negativo para terminar):"));
    if (numero >= 0) {
      suma += numero;
    }
  } while (numero >= 0);
 
  console.log(`La suma total de los números ingresados es: ${suma}`);
}
 
/* ---------------------------------------------------------
   7) Números Impares
   Usa un bucle for para imprimir los números impares del
   1 al 100.
   --------------------------------------------------------- */
function numerosImpares() {
  console.log("=== Números Impares del 1 al 100 ===");
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
 
/* ---------------------------------------------------------
   8) Contador de Vocales
   Pide una palabra y usa un bucle for para contar cuántas
   vocales (a, e, i, o, u) tiene.
   --------------------------------------------------------- */
function contadorDeVocales() {
  const palabra = prompt("Ingresa una palabra:").toLowerCase();
  const vocales = "aeiou";
  let contador = 0;
 
  for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
      contador++;
    }
  }
 
  console.log(`La palabra "${palabra}" tiene ${contador} vocal(es).`);
}
 
/* ---------------------------------------------------------
   9) Menú Interactivo
   Muestra un menú con un bucle do...while que permite
   elegir entre 3 opciones, y se repite hasta que el
   usuario elija salir.
   --------------------------------------------------------- */
function menuInteractivo() {
  let opcion;
 
  do {
    opcion = prompt(
      "=== MENÚ ===\n" +
      "1. Mostrar un mensaje de bienvenida\n" +
      "2. Mostrar la fecha y hora actual\n" +
      "3. Salir del programa\n" +
      "Elige una opción:"
    );
 
    switch (opcion) {
      case "1":
        console.log("¡Bienvenido/a! Que tengas un excelente día.");
        break;
      case "2":
        console.log(`Fecha y hora actual: ${new Date().toLocaleString()}`);
        break;
      case "3":
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción no válida, intenta de nuevo.");
    }
  } while (opcion !== "3");
}
 