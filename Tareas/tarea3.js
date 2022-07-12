
// Variables Globales
let usuario = prompt ('Desea comprar? \n\n- Si \n- No').toLowerCase();
let categoria = "";
let nombre = "";
let email = "";
let tel = "";
let tarjeta ="";


class Producto {
    constructor(id, marca, modelo, precio, categoria){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo
        this.precio = precio;
        this.categoria = categoria;
    }
}

let arrayProductos = [
  new Producto (1, "Asus", "TUF Gaming VG24VQ led 23.6", 35000, "monitores"),
  new Producto  (2, "LG", "Monitor LG 19M38A led 19", 27500,  "monitores"),
  new Producto  (3, "Intel i3", "10100F 4.3Ghz", 23000, "procesadores"),
  new Producto  (4, "Intel i5 ", "10400F 4.3Ghz" , 31200, "procesadores"),
  new Producto  (5, "AMD Ryzen 3", "4100 4.0Ghz", 24000, "procesadores"),
  new Producto  (6, "AMD Ryzen 5", "5600X 4.6Ghz", 32000, "procesadores"),
  new Producto  (7, "Corsair 8gb", "Dominator", 19500, "memorias"),
  new Producto  (8, "G.SKill 16gb", "Trident Z", 26000, "memorias"),
];

// Funciones

function pedirDatos(nombre, email, tel, tarjeta){
    alert("Ingrese sus datos para finalizar con la compra")
    nombre = prompt ("ingrese su nombre:")
    email = prompt ("ingrese su E-mail:")
    tel = prompt ("ingrese su telefono:")
    tarjeta = prompt ("ingrese los 16 digitos de su tarjeta:")
}

function totalSuma (productosEnCarrito) {
    let resultado = productosEnCarrito.reduce ((acc, item) => item.precio + acc, 0);

        let usuario = prompt(`El total de sus productos es: $${resultado}. Desea continuar con la compra? \n\n -Si \n -No`)

            if(usuario == "si"){                
                pedirDatos(nombre, email, tel, tarjeta)
                alert("Gracias por tu compra. Total: $" + resultado )
            }else{
                alert("Esperamos que vuelva pronto!")
            }
   
}


let productosEnCarrito = [];

let categorias = ["monitores", "procesadores", "memorias","proceder a la caja", "salir"]




if(usuario == "si"){
    while (categoria != "salir" && categoria != null && categoria != "proceder a la caja"){
        categoria = prompt ("ingrese una categoria:" + "\n\n" + categorias.join("\n"))
         
    
        if (categoria != "salir" && categoria != null && categoria != "proceder a la caja"){             
            let productosPorCategoria = arrayProductos.filter(item => item.categoria == categoria);
            
            let mensaje = "";

            for (let i = 0; i < productosPorCategoria.length; i++){
                
                mensaje += 
                "ID: " + productosPorCategoria[i].id + " - " +
                productosPorCategoria[i].marca + " " + 
                productosPorCategoria[i].modelo + " " + 
                "Precio: $" + productosPorCategoria[i].precio + "\n";
            };

            let idSeleccionado = prompt ("Seleccione el producto que desea comprar (Por ID):" + "\n\n" + mensaje);

            let productoCarro = arrayProductos.find(item => item.id == idSeleccionado)

            if (productoCarro) {
                productosEnCarrito.push(productoCarro)
            };

            
        }
        
    }

    if (categoria == "proceder a la caja" && productosEnCarrito.length > 0){
        totalSuma(productosEnCarrito);
            // if(usuario == "si"){
            // pedirDatos(nombre, email, tel, tarjeta);}
    }else if(categoria == "proceder a la caja" || productosEnCarrito.lenght <= 0){
        alert("No hay productos en el carro!")
    };
    

}else if(usuario == 'no'){
    alert ('Gracias por su visita');
}

