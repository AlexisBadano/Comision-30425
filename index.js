let botonMiCarrito;
let botonCierrePopUp;
let miCarrito;
let botonCompra;

let productos = [];

let productosEnCarrito;

let aux = localStorage.getItem("productosEnCarrito");

// if (!aux) {
//     productosEnCarrito = [];
//   } else {
//     productosEnCarrito = JSON.parse(aux);
//     productosEnCarrito.forEach(element => {ProductosCarrito(element)
//         totalSuma(productosEnCarrito)
//     });
//   }

// Operador ternario para entrega de "optimización"

aux = null ? (productosEnCarrito = []) : casoPositivo();

function casoPositivo() {
  productosEnCarrito = JSON.parse(aux);
  productosEnCarrito.forEach((element) => {
    ProductosCarrito(element);
    totalSuma(productosEnCarrito);
  });
}

class Producto {
  constructor(nombre, marca, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
  }
}

let producto1 = new Producto("Intel", "Core i3 10100F 4.3Ghz", 16500);
let producto2 = new Producto("Intel", "Core i5 10600KF 4.1Ghz", 33800);
let producto3 = new Producto("AMD", "Ryzen 7 5700X 4.6Ghz", 57000);
let producto4 = new Producto("AMD", "Ryzen 3 3200G 3.6Ghz", 35500);
let producto5 = new Producto("AMD", "Ryzen 7 5700X 4.6Ghz", 57000);
let producto6 = new Producto("Intel", "Core i3 10100F 4.3Ghz", 16500);

productos.push(
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6
);

// Funciones Generales

function inicializarElementos() {
  botonMiCarrito = document.getElementById("botonCarrito");
  botonCierrePopUp = document.getElementById("botonCerrado");
  miCarrito = document.getElementById("popUp");
  botonCompra = document.getElementsByClassName("btn-primary");
}
inicializarElementos();

function totalSuma(productosEnCarrito) {
  let resultado = productosEnCarrito.reduce(
    (acc, item) => item.precio + acc,
    0
  );

  let total = document.querySelector("#popUp__total");
  let suma = document.getElementById("popUp__total-number");

  suma.innerHTML = `$${resultado}`;

  total.append(suma);
}

function sacarCarrito(productoSacar) {
  let sacar = productosEnCarrito.indexOf(productoSacar);

  productosEnCarrito.splice(sacar, 1);
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
}

function ProductosCarrito(producto) {
  let cuerpoLista = document.querySelector("#bodyList");
  let listaProd = document.createElement("li");
  let removeButton = document.createElement("button");

  removeButton.setAttribute("id", "botonRemove");
  listaProd.setAttribute("id", "listaProducto");

  listaProd.innerHTML = `${producto.nombre} ${producto.marca} $${producto.precio}`;
  removeButton.innerHTML = "Remove";

  cuerpoLista.append(listaProd);
  listaProd.append(removeButton);

  removeButton.addEventListener("click", function (event) {
    let x = event.target;

    console.log();
    sacarCarrito(producto);
    totalSuma(productosEnCarrito);
    x.parentElement.remove();
  });
}

function mostrarDatos(i) {
  let nombre = productos[i].nombre;
  let marca = productos[i].marca;
  let precio = productos[i].precio;

  console.log(nombre, marca, precio);
}

function abrirPopUp() {
  const popUp = document.getElementById("popUp");
  popUp.classList.add("active");
}

// Botones de Compra

botonCompra1.onclick = () => {
  productosEnCarrito.push(producto1);
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  ProductosCarrito(producto1);
  console.log(productosEnCarrito);

  abrirPopUp();
  totalSuma(productosEnCarrito);
};

botonCompra2.onclick = () => {
  productosEnCarrito.push(producto2);
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  ProductosCarrito(producto2);
  console.log(productosEnCarrito);

  abrirPopUp();
  totalSuma(productosEnCarrito);
};

botonCompra3.onclick = () => {
  productosEnCarrito.push(producto3);
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  ProductosCarrito(producto3);
  console.log(productosEnCarrito);

  abrirPopUp();
  totalSuma(productosEnCarrito);
};

botonCompra4.onclick = () => {
  productosEnCarrito.push(producto4);
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  ProductosCarrito(producto4);
  console.log(productosEnCarrito);

  abrirPopUp();
  totalSuma(productosEnCarrito);
};

botonCompra5.onclick = () => {
  productosEnCarrito.push(producto5);
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  ProductosCarrito(producto5);
  console.log(productosEnCarrito);

  abrirPopUp();
  totalSuma(productosEnCarrito);
};

botonCompra6.onclick = () => {
  productosEnCarrito.push(producto6);
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  ProductosCarrito(producto6);
  console.log(productosEnCarrito);

  abrirPopUp();
  totalSuma(productosEnCarrito);
};

// PopUp Carrito

botonMiCarrito.addEventListener("click", () => {
  const popUp = document.getElementById("popUp");
  popUp.classList.add("active");
});

botonCierrePopUp.addEventListener("click", () => {
  const popUp = document.getElementById("popUp");
  popUp.classList.remove("active");
});

// Fin PopUp Carrito
