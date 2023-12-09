let documentTitle = document.title;
let users = [
  {
    name: "Juan",
    age: 30,
    email: "juan@juan.juan",
  },
  {
    name: "Luis",
    age: 33,
    email: "luis@luis.luis",
  },
  {
    name: "Pedro",
    age: 34,
    email: "pedro@pedro.ped",
  },
];
if (documentTitle !== "Loops Examples") {
  console.error("Error: Wrong path from loops2.js");
} else {
  let body = document.body;
  body.innerHTML = "<h1>Loops 2</h1>";
  body.innerHTML += `<h2>${documentTitle}</h2>`;
  body.innerHTML += `
  <section>
  <h3>Usuarios</h3>
  <div id="usersBox" class="d-flex flex-wrap justify-content-evenly align-items-center">
  </div>
  <button id="createUser" class="btn btn-primary d-block mx-auto my-3">Crear usuario</button>
  </section>
  `;
  renderUsers();
  let createUserBTN = document.getElementById("createUser");
  createUserBTN.addEventListener("click", () => {
    /* let wantToCreateNewUser = confirm("¿Quieres crear un nuevo usuario?");
    while (wantToCreateNewUser) {
      let name = prompt("Ingresa el nombre del usuario");
      let age = prompt("Ingresa la edad del usuario");
      let email = prompt("Ingresa el email del usuario");
      users.push({ name, age, email });
      wantToCreateNewUser = confirm("¿Quieres crear un nuevo usuario?");
    } */
    let wantToCreateNewUser;
    do {
      wantToCreateNewUser = confirm("¿Quieres crear un nuevo usuario?");
      if (!wantToCreateNewUser) {
        break;
      }
      let name;
      do {
        name = prompt("Ingresa el nombre del usuario");
        if (!name) {
          alert("El nombre es obligatorio");
          continue;
        }
      } while (!name);
      let age;
      do {
        age = prompt("Ingresa la edad del usuario");
        if (!age) {
          alert("La edad es obligatoria");
          continue;
        }
        if (isNaN(age)) {
          alert("La edad debe ser un número");
          continue;
        }
        if (Number(age) < 0 || Number(age) > 120) {
          alert("La edad debe ser un número entre 0 y 120");
          continue;
        }
      } while (!age || isNaN(age) || Number(age) < 0 || Number(age) > 120);
      let email;
      do {
        email = prompt("Ingresa el email del usuario");
        if (!email) {
          alert("El email es obligatorio");
          continue;
        }
        /* Validar email con regex */
        if (
          !email.match(
            /^[A-z\.0-9\-_]+@[A-z\.0-9\-_]+(\.[A-z0-9\-_]+)*(\.[A-z]{2,10})+$/
          )
        ) {
          alert("El email no es válido");
          continue;
        }
      } while (
        !email ||
        !email.match(
          /^[A-z\.0-9\-_]+@[A-z\.0-9\-_]+(\.[A-z0-9\-_]+)*(\.[A-z]{2,10})+$/
        )
      );
      users.push({ name, age, email });
      if (!confirm("¿Quieres ir pintando los usuarios?")) {
        continue;
      }
      renderUsers();
    } while (wantToCreateNewUser);
  });
}

function renderUsers() {
  let usersBox = document.getElementById("usersBox");
  usersBox.innerHTML = "";
  //for (let user of users) {
  for (
    let i = 0; // Desde donde empieza (i = 0)
    i < users.length; // Hasta donde termina (i < 3)
    i++ // Número de pasos que da en cada iteración (i = i + 1)
  ) {
    let user = users[i];
    usersBox.innerHTML += `
      <div class="card w-50">
        <div class="card-body">
          ${((u) => {
            console.log(u);
            let i = 0;
            let result = "";
            for (let key in u) {
              console.log(key);
              result +=
                key === "name"
                  ? `<h5 class="card-title">${u[key]}</h5>`
                  : `<p class="card-text">${key}: ${u[key]}</p>`;
              i++;
            }
            console.log(i);
            return result;
          })(user)}
        </div>
      </div>
    `;
  }
}
