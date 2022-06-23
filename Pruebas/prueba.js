
// let saludo = "Hola";

// let nombre = prompt ("ingrese su nombre");

// let edad = prompt ("ingrese su edad");

// console.log(saludo + " " + nombre + " " + "Es bueno saber que tienes" + " " + edad + "años") ;

// for( edad; edad < 18; edad++){

// console.log (edad)
// }

let nombre = prompt ("Ingrese su nombre");
let anoNacimiento = prompt ("Ingrese su año de nacimiento");
let anoActual = prompt ("En que año estamos?")
let anoCuenta = anoNacimiento - 1;


for (anoNacimiento; anoNacimiento < anoActual; anoNacimiento++){
    
    let edad = anoNacimiento - anoCuenta;

    if (edad == 1){
        ano = "Año"
    }else{
        ano = "Años"
    }

    console.log (nombre + " " + "En" + " " + anoNacimiento + " " + "tu edad era" + " " + edad + " " + ano) 
}



// Ejemplo del tutor

// let usu = prompt("si, para usar la tabla o, no")
// while ( usu == "si"){
//     let num = prompt("ingrese el numero que quiere sabe su table")
//     for (let i = 0; i <=10; i++){
//         let tabla = num * i;
//         console.log(`${num} X ${i} = ${tabla}`);
//     }
//     let validacion = prompt("si, para seguir o no")
//     if (validacion == "si") {    
//     }else{
//         break
//     }

// }
