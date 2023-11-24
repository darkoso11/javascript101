/* Demostración de interacción con javascript */
console.log("101.js");
console.log("hola mundo");
console.log(console);
// document.getElementById("mainContent").innerHTML = "<h2>Hola mundo</h2>";
document.querySelectorAll("h1")[0].innerHTML =
  "Título cambiado desde javascript";
/* Introducción */
/* 
  Comentarios
  de varias
  líneas	
*/
// Comentario de una línea
/* Variables */
// var var = 1; // Palabra reservada: no recomendada
var x = 5; // Variable global: no recomendada en ES6
let y = 6; // Variable local: recomendada en ES6
const z = 7; // Constante: recomendada en ES6
x = 8; // Se puede reasignar valor a una variable global
y = 9; // Se puede reasignar valor a una variable local
// z = 9; // No se puede reasignar valor a una constante
const mainContent = document.getElementById("mainContent");
mainContent.innerHTML = "<h2>Variables</h2>";
mainContent.innerHTML += "<p>x = " + x + "</p>";
mainContent.innerHTML += "<p>y = " + y + "</p>";
mainContent.innerHTML += "<p>z = " + z + "</p>";
console.log(x + y);
mainContent.innerHTML += "<p>x + y = " + (x + y) + "</p>";
console.log(z - y);
mainContent.innerHTML += "<p>z - y = " + (z - y) + "</p>";
console.log(x * z);
mainContent.innerHTML += "<p>x * z = " + x * z + "</p>";
console.log(x / y);
mainContent.innerHTML += "<p>x / y = " + x / y + "</p>";
console.log(x % 2);
mainContent.innerHTML += "<p>x % 2 = " + (x % 2) + "</p>";
console.log(y % 2);
mainContent.innerHTML += "<p>y % 2 = " + (y % 2) + "</p>";
