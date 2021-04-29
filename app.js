let sumar = require ("./Calculadora/suma");
let multiplicar = require ("./Calculadora/multiplicar");
let restar = require ("./Calculadora/restar");
let dividir = require ("./Calculadora/dividir");


//console.log (restar (5, 4))



// TEST de CALL BACKS DEL MODULO N° 6

function calculadora (n1, n2, milagros) {
    return milagros (n1, n2);
}

console.log (calculadora (4, 5, sumar))
