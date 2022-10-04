const usario1 = {
  nombre: "Juan",
  edad: 32,
  admin: true,
};
const usuario2 = {
  nombre: "Ana",
  edad: 25,
  admin: false,
};
// metodos: utilizar una funcion dentro de un objeto
const mascota = {
  nombre: "firulais",
  familia: "perro",
  raza: "Caniche",
  peso: 3000,
  edad: "7 meses",
  saludar: function () {
    document.write("wouf wouf soy un alto perro");
  },
  saludarme: function () {
    document.write(`Hola yo soy el fabuloso ${this.nombre}`);
  },
};
mascota.saludar();
mascota.saludarme();

// user.nombre = "pedro";

// let ket = "edad";

// console.log(user.nombre);
// console.log(user[key]);

// console.log(user2.nombre);
// console.log(user2[key]);

// console.log(Object.getOwnPropertyDescriptor(user, 'apellido'));

// console.log(mascota);

// var obj = { a: 1, b: 2, c: 3, d: 4 };

// for (const prop in obj) {
//   document.write(prop);
// }
// for(const prop in obj){
//     document.write(prop + ':' + obj[key]);
// }

// Objetos Funcionales: ==> crear objetos a partir de funciones

function User(nombre, edad, admin) {
  this.nombre = nombre;
  this.edad = edad;
  this.admin = admin
//   this.saludar = function () {
//     document.write(`Hola yo soy el fabuloso ${this.nombre}`);
//   };
}

const user1 = new User("Juan", 33, true);
const user2 = new User("Maria", 20, true);
const user3 = new User("El pepe", 666, false);

const apapa = [user1, user2, user3];

for (const cosita in apapa) {
  document.write(cosita);
}
