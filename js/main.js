"use strict";
//ejemplo de tipado con TS ES6
let nombre = 'Jose';
let edad = 35;
let isAct = true;
let arrDemo = [12, 78, 79];
function suma(valorA, valorB) {
    console.log('el resultado es ' + (valorA + valorB));
}
suma(2, 8);
const resta = (valorA, valorC) => {
    let suma = valorA - valorC;
    console.log(`El resultado de la resta es: ${suma}`);
};
resta(12, 10);
