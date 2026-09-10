let marcacoche =  'toyota'; 
let modelo = 'corolla';
let anio = 2020;


console.log(modelo);
console.log(anio);
console.log("vehiculo: ", marcacoche, modelo, anio);

/* primera forma */
console.log("Vehiculo: " + marcacoche + " " + modelo + " " + anio);

/* segunda forma */
console.log(`Vehiculo: ${marcacoche} ${modelo} ${anio}`);


/* tercera forma */
console.log("Vehiculo: ".concat(marcacoche, " ", modelo, " ", anio));


/* cuarta forma */

console.log(String.raw`Vehiculo: ${marcacoche} ${modelo} ${anio}`);

/* quinta forma */

console.log("Vehiculo: "+  marcacoche+ "\n modelo:" + modelo + "\n  año" + anio);