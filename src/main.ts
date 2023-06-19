//ejemplo de tipado con TS ES6

let nombre: string = 'Jose';
let edad : number = 35;
let isAct: boolean | any = true;

let arrDemo:number[] = [12,78,79];

function suma(valorA:number, valorB:number):void{
    console.log('el resultado es ' + (valorA + valorB));
}

suma(2,8);

const resta = (valorA:number,valorC:number):void =>{
    let suma: any = valorA - valorC; 
    console.log(`El resultado de la resta es: ${suma}`);
}

resta(12,10);
