/* for (inicializacion ;condicion ; actualizacion){
    ///codigo a repetir
}

for (let i = 1; i <= 5 ; i++){
    console.log ('iteracion:', i);
} */


/* while */

/* while (condicion) {
    /* codigo que se va a repetir 

} */


/* let contador = 0;

while (contador < 3){
    console.log('contador: ', contador);
    contador ++;
} */



/* do {
   /* codigo a repetir  
} while (condicion); */

/* let x = 10 ;

do {
    console.log('el valor de x es: ', x)
    x--;
}while(x>5);



 */

/* for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
} */


/* let num = 14;
let esPrimo = true;
let i = 2;

while (i < num) {
  if (num % i === 0) {
    esPrimo = false;
    break;
  }
  i++;
}
console.log(esPrimo ? "Es primo." : "No es primo."); */




let suma = 0 ;

let numero = 0;

do {
    numero = parseInt(prompt('ingrese el numero 0 para salir '));
    suma += numero ;
}while (numero !== 0 );

console.log ("suma total: ", suma );