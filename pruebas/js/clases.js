class Mascota{
    constructor(nombre,familia,raza,peso,edad){
        this.nombre = nombre;
        this.familia = familia;
        this.raza = raza;
        this.peso = peso;
        this.edad = edad
    }
    saludar(){
        document.write(`Hola ${this.nombre}`);
    }
}

const mascotas = [];

const mascota1 = new Mascota("perrote","chichi","blanco",20,10)
mascotas.push(mascota1)
const mascota2 = new Mascota("Hermano de Perrote","chichi","blanco",20,10)
mascotas.push(mascota2)
const mascota3 = new Mascota("Cupido","chichi","Negroncho",20,10)
mascotas.push(mascota3)

for(const mascotita in mascotas){
    document.write(mascotita.nombre)
}
