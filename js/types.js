/* Tipos */
let a = 1; // Number
let nombre = "Alec"; // String (comillas dobles)
let apellido = "Montaño"; // String (comillas simples)
let textoConHTML = /* alt + Num 9, alt + Num 6 */ `
  <h2>Tipos</h2>
  <p>a = ${a}</p>
  <p>nombre = ${nombre}</p>
  <p>apellido = ${apellido}</p>
`;
let esChido = true; // Boolean (true, false)
let noDefinido = undefined; // Undefined
let noDefinito2; // Undefined
let nulo = null; // Null
let arregloDeNumeros = [1, 2, 3, 4, 5]; // Array (Number)
let arregloDeNombres = ["Juan", "Marcelo", "Paco", "Luis"]; // Array (String)
let arregloMixto = [1, "Juan", 2, "Marcelo", 3, "Paco", 4, "Luis"]; // Array (Number | String)
let arregloBooleanos = [true, false, true, false]; // Array (Boolean)
let arregloVacio = []; // Array vacío
let arregloDeArreglos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // Array (Array)
let user = /* Object */ {
  nombreCompleto: nombre + " " + apellido,
  edad: 29,
}; // Object
console.log(user);
console.log("user", user);

function suma(a, b) /* Función */ {
  if (typeof a !== "number" || typeof b !== "number") {
    return NaN;
  } else {
    return a + b;
  }
}

console.log(suma("a", 2));
console.log(suma(3, 2));
console.log(suma("7", 2));
console.log(suma(89, 2));
console.log(suma(9, 2));
console.log(suma("a", 1));
console.log(suma("6", 3));
console.log(suma(99, 7));
console.log("a" + 2);
