/* Gato eres el mejor :3 */
let body = document.body;
let title = document.title;
if (title !== "Conditionals Examples") {
  console.error("Error: Wrong path from conditionals2.js");
} else {
  body.innerHTML = "<h1>Conditionals 2</h1>";
  body.innerHTML += `<h2>${title}</h2>`;
  let randomNumber = Math.floor(Math.random() * 10);
  switch (true) {
    case randomNumber > 5:
      body.innerHTML += `<p>El número ${randomNumber} es mayor a 5</p>`;
      break;
    case randomNumber < 5:
      body.innerHTML += `<p>El número ${randomNumber} es menor a 5</p>`;
      break;
    case randomNumber === 5:
      body.innerHTML += `<p>El número ${randomNumber} es igual a 5</p>`;
      break;
    default:
      body.innerHTML += `<p>El número ${randomNumber} no es un número</p>`;
      break;
  }
  let randomNumber2 = Math.floor(Math.random() * 10);
  if (randomNumber2 > 5) {
    body.innerHTML += `<p>El número ${randomNumber2} es mayor a 5</p>`;
  } else if (randomNumber2 < 5) {
    body.innerHTML += `<p>El número ${randomNumber2} es menor a 5</p>`;
  } else if (randomNumber2 === 5) {
    body.innerHTML += `<p>El número ${randomNumber2} es igual a 5</p>`;
  } else {
    body.innerHTML += `<p>El número ${randomNumber2} no es un número</p>`;
  }
  let randomNumber3 = Math.floor(Math.random() * 10);
  body.innerHTML +=
    randomNumber3 > 5
      ? `<p>El número ${randomNumber3} es mayor a 5</p>`
      : randomNumber3 < 5
      ? `<p>El número ${randomNumber3} es menor a 5</p>`
      : randomNumber3 === 5
      ? `<p>El número ${randomNumber3} es igual a 5</p>`
      : `<p>El número ${randomNumber3} no es un número</p>`;
}