let unaVariableQueSeAsigna = 1; /* = es para asignar */
/* Operadores Matemáticos */
let sumar = 1 + 2; /* + es para sumar */
let resta = 1 - 2; /* - es para restar */
let multiplicacion = 1 * 2; /* * es para multiplicar */
let division = 1 / 2; /* / es para dividir */
let modulo = 1 % 2; /* % es para obtener el residuo de una división */
let exponente = 2 ** 3; /* ** es para elevar un número a una potencia */
/* 2 ** 3 = 2 * 2 * 2 */
/* Operadores de asignación */
sumar = sumar + 1; /* suma += 1; */
sumar += 1; /* suma = suma + 1; */
let unaCadenaDeTexto = "Hola";
unaCadenaDeTexto += " mundo"; /* "Hola mundo" */
resta -= 1; /* resta = resta - 1; */
multiplicacion *= 2; /* multiplicacion = multiplicacion * 2; */
division /= 2; /* division = division / 2; */
modulo %= 2; /* modulo = modulo % 2; */
exponente **= 2; /* exponente = exponente ** 2; */
/* Ejemplos de operadores Matemáticos y de asignación */
/* Ejemplo 1: */
/* let tiradaDeDado = prompt("Ingresa un tu tirada");
let modificador = prompt("Ingresa un modificador");
console.log("tiradaDeDado", tiradaDeDado);
console.log("typeof tiradaDeDado", typeof tiradaDeDado);
console.log("tiradaDeDado + modificador", tiradaDeDado + modificador);
let tiradaDeDadoComoNumero = Number(tiradaDeDado);
console.log("tiradaDeDadoComoNumero", tiradaDeDadoComoNumero);
console.log("typeof tiradaDeDadoComoNumero", typeof tiradaDeDadoComoNumero);
let modificadorComoNumero = Number(modificador);
console.log("modificadorComoNumero", modificadorComoNumero);
console.log("typeof modificadorComoNumero", typeof modificadorComoNumero);
console.log(
  "tiradaDeDadoComoNumero + modificadorComoNumero",
  tiradaDeDadoComoNumero + modificadorComoNumero
); */
/* Ejemplo 2 */
/* let ahorroConstante = prompt("¿Cuánto ahorras cada mes?");
let meses = prompt("¿Por cuántos meses?");
alert("El resultado de tu ahorro será de: " + ahorroConstante * meses); */
/* Operadores de comparación */
let primerNumero = 1;
let segundoNumero = 2;
let tercerNumero = "2";
let cuartoNumero = 3;
let quintoNumero = 3;
/* Igualdad */
let comparacionDeIgualdad = primerNumero == segundoNumero; /* false */
let comparacionDeIgualdad2 = segundoNumero == tercerNumero; /* true */
/* Igualdad de tipos */
let comparacionDeIgualdadDeTipos = segundoNumero === tercerNumero; /* false */
let comparacionDeIgualdadDeTipos2 = segundoNumero === cuartoNumero; /* false */
let comparacionDeIgualdadDeTipos3 = cuartoNumero === quintoNumero; /* true */
/* Desigualdad */
let comparacionDeDesigualdad = primerNumero != segundoNumero; /* true */
let comparacionDeDesigualdad2 = segundoNumero != tercerNumero; /* false */
/* Desigualdad de tipos */
let comparacionDeDesigualdadDeTipos = segundoNumero !== tercerNumero; /* true */
let comparacionDeDesigualdadDeTipos2 =
  segundoNumero !== cuartoNumero; /* true */
let comparacionDeDesigualdadDeTipos3 =
  cuartoNumero !== quintoNumero; /* false */
/* Mayor que */
let comparacionDeMayorQue = primerNumero > segundoNumero; /* false */
let comparacionDeMayorQue2 = segundoNumero > tercerNumero; /* false */
let comparacionDeMayorQue3 = cuartoNumero > quintoNumero; /* false */
let comparacionDeMayorQue4 = quintoNumero > cuartoNumero; /* false */
let comparacionDeMayorQue5 = cuartoNumero > primerNumero; /* true */
/* Mayor o igual que */
let comparacionDeMayorOIgualQue = primerNumero >= segundoNumero; /* false */
let comparacionDeMayorOIgualQue2 = segundoNumero >= tercerNumero; /* true */
let comparacionDeMayorOIgualQue3 = cuartoNumero >= quintoNumero; /* true */
let comparacionDeMayorOIgualQue4 = quintoNumero >= cuartoNumero; /* true */
let comparacionDeMayorOIgualQue5 = cuartoNumero >= primerNumero; /* true */
/* Menor que */
let comparacionDeMenorQue = primerNumero < segundoNumero; /* true */
let comparacionDeMenorQue2 = segundoNumero < tercerNumero; /* false */
let comparacionDeMenorQue3 = cuartoNumero < quintoNumero; /* false */
let comparacionDeMenorQue4 = quintoNumero < cuartoNumero; /* false */
let comparacionDeMenorQue5 = cuartoNumero < primerNumero; /* false */
/* Menor o igual que */
let comparacionDeMenorOIgualQue = primerNumero <= segundoNumero; /* true */
let comparacionDeMenorOIgualQue2 = segundoNumero <= tercerNumero; /* true */
let comparacionDeMenorOIgualQue3 = cuartoNumero <= quintoNumero; /* true */
let comparacionDeMenorOIgualQue4 = quintoNumero <= cuartoNumero; /* true */
let comparacionDeMenorOIgualQue5 = cuartoNumero <= primerNumero; /* false */
/* 
let primerNumero = 1;
let segundoNumero = 2;
let tercerNumero = '2';
let cuartoNumero = 3;
let quintoNumero = 3;
*/
/* Operadores Ternarios */
let miTernario =
  primerNumero > segundoNumero ? "Es mayor" : "Es menor"; /* Es menor */
/* Operadores Lógicos */
/* 
  && (AND):
  true && true = true
  true && false = false
  false && true = false
  false && false = false
*/
/* 
  || (OR):
  true || true = true
  true || false = true
  false || true = true
  false || false = false
*/
/* 
  ! (NOT):
  !true = false
  !false = true
  !(true && true) = false
  !(true && false) = true
  !(false && true) = true
  !(false && false) = true
  !(true || true) = false
  !(true || false) = false
  !(false || true) = false
  !(false || false) = true
  !0 = !false = true
  !!0 = !!false = !true = false
  !1 = !true = false
  !!1 = !!true = !false = true
  !-1 = !true = false
  !!-1 = !!true = !false = true
  !'' = !false = true
  !!'' = !!false = !true = false
  !' ' = !true = false
  !!' ' = !!true = !false = true
  !'a' = !true = false
  !!'a' = !!true = !false = true
  ![] = !true = false
  !![] = !!true = !false = true
  !{} = !true = false
  !!{} = !!true = !false = true
  !undefined = !false = true
  !!undefined = !!false = !true = false
  !null = !false = true
  !!null = !!false = !true = false
*/
/* console.log("!![]", !![]);
console.log("!!{}", !!{});
console.log("!!undefined", !!undefined);
console.log("!!null", !!null);
console.log(
  "!!()=>{}",
  !!(() => {
    return "a";
  })()
); */
/* let operacionBooleanaOne =
  (1 > 4 || !!98 === !!"") && (!1 === "true" || (!!"false" && !!" ")); */
