
let nombre = prompt ("Ingrese su nombre");
let anoNacimiento = prompt ("Ingrese su año de nacimiento");
let anoActual = prompt ("En que año estamos?")
let anoCuenta = anoNacimiento - 1;


for (anoNacimiento; anoNacimiento < anoActual; anoNacimiento++){
    
    let edad = parseInt(anoNacimiento) - parseInt(anoCuenta);

    let anoMuestra = parseInt(anoNacimiento) + 1;

    if (edad == 1){
        ano = "Año"
    }else{
        ano = "Años"
    }

    if (anoNacimiento == 2021){
        
        cumples = "cumples"
    }else{
        cumples = "cumpliste"
    }

    console.log (nombre + " En " + anoMuestra + " " + cumples + " " + edad + " " + ano) 
}