/* Conditions */
/* 
let suNumero = Number(prompt("Ingrese un número"));
if (suNumero > 0) {
  // Si tal cosa es verdadero:
  alert("Su número es mayor a 0; " + suNumero);
} else if (suNumero == 0) {
  // Si no, entonces, si tal otra cosa es verdadero:
  alert("Su número es igual a 0; " + suNumero);
} else {
  // Si ninguna de las dos opciones anteriores es verdadero, entonces  se hace lo siguiente: 
  alert("Su número es menor a 0; " + suNumero);
} */
let colorInput = document.getElementById("colorInput");
let pWithColorBackground = document.getElementById("colorBackground");

function cambiarColor() {
  let color = colorInput.value;
  console.log("color Check");
  console.log(color);
  console.log(color.includes("#"));
  console.log(color.length);
  /* if (color.includes("#") && color.length >= 4 && color.length <= 9) {
    pWithColorBackground.innerHTML = "El color es válido y es un Hexadecimal";
    pWithColorBackground.innerHTML += `<br>El color es: ${color}`;
    document.body.style.backgroundColor = color;
  } else {
    pWithColorBackground.innerHTML = "El color no es válido";
    pWithColorBackground.innerHTML += `<br>El color invalido es: ${color}`;
  } */
  switch (false) {
    /* Caso Hexadecimal */
    case color.includes("#") &&
      color.length >= 4 &&
      color.length !== 6 &&
      color.length !== 8 &&
      color.length <= 9:
      pWithColorBackground.innerHTML = "El color es válido y es un Hexadecimal";
      switch (color.length) {
        case 4:
          pWithColorBackground.innerHTML += ` de 3 números`;
          break;
        case 5:
          pWithColorBackground.innerHTML += ` de 4 números, por lo tanto tiene el alpha`;
          break;
        case 7:
          pWithColorBackground.innerHTML += ` de 6 números`;
          break;
        case 9:
          pWithColorBackground.innerHTML += ` de 8 números, por lo tanto tiene el alpha`;
          break;
        default:
          break;
      }
      pWithColorBackground.innerHTML += `<br>El color es: ${color}`;
      document.body.style.backgroundColor = color;
      break;
    /* Caso RGB || RGBA */
    case (color.includes("rgb") ||
      color.includes("RGB") ||
      color.includes("Rgb") ||
      color.includes("rGb") ||
      color.includes("rgB") ||
      color.includes("RgB") ||
      color.includes("RGb") ||
      color.includes("rGB") ||
      color.includes("RGBA") ||
      color.includes("RGBa") ||
      color.includes("RgbA") ||
      color.includes("rGbA") ||
      color.includes("rgBA") ||
      color.includes("RgBA") ||
      color.includes("RGbA") ||
      color.includes("rGBA")) &&
      color.includes("(") &&
      color.includes(")") &&
      color.includes(",") &&
      color.length >= 10 &&
      color.length <= 26 &&
      (color.includes("0") ||
        color.includes("1") ||
        color.includes("2") ||
        color.includes("3") ||
        color.includes("4") ||
        color.includes("5") ||
        color.includes("6") ||
        color.includes("7") ||
        color.includes("8") ||
        color.includes("9")):
      pWithColorBackground.innerHTML = `El color es válido y es un rgb${
        color.includes("a") || color.includes("A") ? "a" : ""
      }`;
      pWithColorBackground.innerHTML += `<br>El color es: ${color}`;
      document.body.style.backgroundColor = color;
      break;
    /* Caso Color inválido */
    default:
      pWithColorBackground.innerHTML = "El color no es válido";
      pWithColorBackground.innerHTML += `<br>El color invalido es: ${color}`;
      break;
  }
}
