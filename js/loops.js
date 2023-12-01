/* Bucles */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let unObjetoCualquiera = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  direccion: "Calle 123",
  telefono: "1234567890",
  email: "",
};

/* 
  Opción 1: crear una función y mandarle cada uno 
  de los elementos del arreglo o del objeto.
*/
/* 
function exponenteDeDos(numero) {
  return numero ** 2;
}
let resultado1 = exponenteDeDos(numeros[0]);
let resultado2 = exponenteDeDos(numeros[1]);
let resultado3 = exponenteDeDos(numeros[2]);
let resultado4 = exponenteDeDos(numeros[3]);
let resultado5 = exponenteDeDos(numeros[4]);
let resultado6 = exponenteDeDos(numeros[5]);
let resultado7 = exponenteDeDos(numeros[6]);
let resultado8 = exponenteDeDos(numeros[7]);
let resultado9 = exponenteDeDos(numeros[8]); */
function concatenarAlgo(algo) {
  return `Una cosa: ${algo}`;
}
let resultadoAlgo1 = concatenarAlgo(unObjetoCualquiera.nombre);
let resultadoAlgo2 = concatenarAlgo(unObjetoCualquiera.apellido);
let resultadoAlgo3 = concatenarAlgo(unObjetoCualquiera.edad);
let resultadoAlgo4 = concatenarAlgo(unObjetoCualquiera.direccion);
let resultadoAlgo5 = concatenarAlgo(unObjetoCualquiera.telefono);
let resultadoAlgo6 = concatenarAlgo(unObjetoCualquiera.email);

/* 
  Opción 2: Crear bucles
*/
/* For */
for (let i = 0; i < numeros.length; i++) {
  console.log("iteración", i);
  console.log("resultado " + (i + 1), numeros[i] ** 2);
}
for (let numero of numeros) {
  console.log(
    "resultado del cuadrado de " + numero + " es igual a " + numero ** 2
  );
}
for (let element in unObjetoCualquiera) {
  console.log(
    "resultado de " + element,
    concatenarAlgo(unObjetoCualquiera[element])
  );
}
/* While || Do While */
