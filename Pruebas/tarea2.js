// Variables Globales
let usuario = prompt ('Desea comprar? \n\n- Si \n- No').toLowerCase();

let precioProducto1 = 24590;

let precioProducto2 = 74385;

let precioProducto3 = 10250;

let productoSeleccionado;

//Estas tres las tuve que inicializar en 0 por que sino, si no elegias algun item la suma daba NaN y no lo pude sortear de otra forma :(

let resultadoMon = 0;   
let resultadoPlac = 0;
let resultadoPer = 0;

// Funciones
 
const cantMonitor = (x) =>{    
    if (x > 0){
        resultadoMon = x * precioProducto1;
        alert(`Se han agregado ${x} Monitor al carrito`);

    console.log(`El monto en la categoria de Monitores es de $${resultadoMon}`);
    }else{
        alert('Debe comprar al menos 1 item')
    }

}

const cantPlacas = (y) =>{
    if(y > 0){
        resultadoPlac = y * precioProducto2;
        alert((`Se han agregado ${y} Placas de Video al carrito`));

        console.log(`El monto en la categoria de Placas de Video es de $${resultadoPlac}`);
    }else{
        alert('Debe comprar al menos 1 item');
    }
    
}

const cantPerifericos = (z) =>{
    if(z > 0){
    resultadoPer = z * precioProducto3;
    alert((`Se han agregado ${z} Mouse y Teclados al carrito`));
    console.log(`El monto en la categoria de Placas de Video es de $${resultadoPer}`);
    }else{
        alert('Debe comprar al menos 1 item');
    }
    
}

const total = () => {
    
    
        caja = resultadoMon + resultadoPlac + resultadoPer; 
        alert(`el total a pagar es de $${caja}`);
        console.log(`el total a pagar es de $${caja}`);
}

 
if(usuario == "si"){
    do{
        productoSeleccionado = prompt(`Elija su producto: \n\n 1- Monitor \n 2- Placa de Video \n 3- Teclado y Mouse \n 4- Proceder a la caja \n 5- Salir`).toLowerCase();

        switch (productoSeleccionado) {
            case 'monitor':
                x = Number(prompt ('Cuantos monitores desea comprar?'));
                cantMonitor(x);
                break;
            case '1':
                x = Number(prompt ('Cuantos monitores desea comprar?'));
                cantMonitor(x);
                break;
            case 'placa de video':
                y = Number(prompt ('Cuantas Placas de Video desea comprar?'));
                cantPlacas(y);
                break;
            case '2':
                y = Number(prompt ('Cuantas Placas de Video desea comprar?'));
                cantPlacas(y);
                break;
            case 'teclado y mouse':
                z = Number(prompt ('Cuantos combos de perifericos desea comprar?'));
                cantPerifericos(z);
                break;
            case '3':
                z = Number(prompt ('Cuantos combos de perifericos desea comprar?'));
                cantPerifericos(z);
                break;
            case 'proceder a la caja':
                total();
                break;
            case '4':
                total();
                break;
            case 'salir':
                alert('Gracias por su visita!');
                break;
            case '5':
                alert('Gracias por su visita!');
                break;
            default:
                alert('Opcion incorrecta');
                break;
        }


    }while((productoSeleccionado != 'proceder a la caja') && (productoSeleccionado != 'salir') && (productoSeleccionado != '5'));
}else if(usuario == 'no'){
    alert ('Gracias por su visita');
}else{
    alert('Por favor elija una opción')
}