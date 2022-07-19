let botonMiCarrito;
let botonCierrePopUp;
let miCarrito;
let botonCompra;

let productos = [];

let productosEnCarrito = [];

let arrayTotal = [];

class Producto {
    constructor(nombre, marca, precio){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}


let producto1 = new Producto ("Intel", "Core i3 10100F 4.3Ghz", 16500)
let producto2 = new Producto ("Intel", "Core i5 10600KF 4.1Ghz", 33800)
let producto3 = new Producto ("AMD", "Ryzen 7 5700X 4.6Ghz", 57000)
let producto4 = new Producto ("AMD", "Ryzen 3 3200G 3.6Ghz", 35500)
let producto5 = new Producto ("AMD", "Ryzen 7 5700X 4.6Ghz", 57000)
let producto6 = new Producto ("Intel", "Core i3 10100F 4.3Ghz", 16500)

productos.push(producto1, producto2, producto3, producto4, producto5, producto6);

function inicializarElementos() {
    botonMiCarrito = document.getElementById('botonCarrito');
    botonCierrePopUp = document.getElementById('botonCerrado');
    miCarrito = document.getElementById('popUp');
    botonCompra = document.getElementById('botonCompra');
} 

inicializarElementos();

function totalSuma (productosEnCarrito) {
    let resultado = productosEnCarrito.reduce ((acc, item) => item.precio + acc, 0);

    arrayTotal.push(resultado)

    // let total = document.querySelector('#popUp__total')
    // let suma = document.createElement("p")

    // suma.innerHTML = `${resultado}`

    // total.append(suma)

    console.log(arrayTotal);
}



function ProductosCarrito(producto){
    producto = productosEnCarrito[productosEnCarrito.length - 1]
    let cuerpoLista = document.querySelector('#bodyList')
    let listaProd = document.createElement("li")

    listaProd.innerHTML = `${producto.nombre} ${producto.marca} $${producto.precio}`

    cuerpoLista.appendChild(listaProd)
}


function mostrarDatos (i) {
    let nombre =  productos[i].nombre;
    let marca =  productos[i].marca;
    let precio = productos[i].precio; 

    console.log(nombre, marca, precio);
}


function abrirPopUp () {
    const popUp = document.getElementById('popUp')
    popUp.classList.add('active');
}


// Botones de Compra


botonCompra1.onclick = () => {
    productosEnCarrito.push(producto1)
    ProductosCarrito();
    console.log(productosEnCarrito);

    abrirPopUp ()
    totalSuma(productosEnCarrito)
}

botonCompra2.onclick = () => {
    productosEnCarrito.push(producto2)
    ProductosCarrito();
    console.log(productosEnCarrito);

    abrirPopUp ()
}

botonCompra3.onclick = () => {
    productosEnCarrito.push(producto3)
    ProductosCarrito();
    console.log(productosEnCarrito);
    
    abrirPopUp ()
}

botonCompra4.onclick = () => {
    productosEnCarrito.push(producto4)
    ProductosCarrito();
    console.log(productosEnCarrito);
    
    abrirPopUp ()
}

botonCompra5.onclick = () => {
    productosEnCarrito.push(producto5)
    ProductosCarrito();
    console.log(productosEnCarrito);
    
    abrirPopUp ()
}

botonCompra6.onclick = () => {
    productosEnCarrito.push(producto6)
    ProductosCarrito();
    console.log(productosEnCarrito);

    abrirPopUp ()
}






// PopUp Carrito

botonMiCarrito.addEventListener('click', () => {
        const popUp = document.getElementById('popUp')
        popUp.classList.add('active');
    }
    
);

botonCierrePopUp.addEventListener('click', () => {
    const popUp = document.getElementById('popUp')
    popUp.classList.remove('active');
}

);

// Fin PopUp Carrito