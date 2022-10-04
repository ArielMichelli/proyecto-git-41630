const sumar = function (a,b,accion){
    let suma = a +b ;
    accion('resultado: ' + suma);
    return suma;
}

const servicio = function(mensaje){
    console.log("Enviando al cliente:" + mensaje);
}

let result = sumar( 9, 9, console.log);
console.log(result);

let result2 = sumar( 8, 14, alert);
console.log(result2);

let result3 = sumar( 8, 14, servicio);
console.log(result3);