let users = [
  {
    name: "Oswaldo",
    age: 32,
    description: "Soy un usuario",
    email: "oswaldo@oswaldo.osvi",
  },
  {
    name: "Aldo",
    age: 31,
    description: "Soy otro usuario",
    email: "aldo@aldo.aldo",
  },
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
    email: "pedro@pedro.pedro",
  },
  {
    name: "Alec",
    age: 29,
    description: "Soy otro usuario más",
    email: "alec@alec.alec",
  },
];
let usersExample = document.getElementById("users_example");

if (usersExample) {
  usersExample.innerHTML = `
  <h2>Usuarios</h2>
  <div class="d-flex flex-wrap justify-content-evenly align-items-center">
  ${getCards()}
  </div>
  `;
}

function getCards() {
  let cards = ``;
  for (let user of users) {
    cards += `
    <div class="card w-50">
      <div class="card-body">
        <h5 class="card-title">Nombre: ${user.name}</h5>
        <p class="card-text">Edad: ${user.age}</p>
        ${
          /* ((u) => {
          if (!!u.description) {
            return `<p class="card-text">Descripción: ${u.description}</p>`;
          } else {
            return ``;
          }
        })(user) */
          !!user.description
            ? `<p class="card-text">Descripción: ${user.description}</p>`
            : ``
        }
        ${
          !!user.birthday
            ? `<p class="card-text">Cumpleaños: ${user.birthday}</p>`
            : ``
        }
        <p class="card-text">Email: ${user.email}</p>
      </div>
    </div>
    `;
  }
  return cards;
}
