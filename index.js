let botonMiCarrito;
let botonCierrePopUp;
let miCarrito;

let productos = [];

let productosEnCarrito;

let aux = localStorage.getItem("productosEnCarrito");

// if (!aux) {
//     productosEnCarrito = [];
//   } else {
//     productosEnCarrito = JSON.parse(aux);
//     productosEnCarrito.forEach(element => {ProductosCarrito(element);
//         totalSuma(productosEnCarrito);
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
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar el item?",
      text: "No podrás dar marcha atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Borrado!", "El item fue removido!.", "success");
        sacarCarrito(producto);
        totalSuma(productosEnCarrito);
        x.parentElement.remove();
      }
    });
  });
}

function abrirPopUp() {
  const popUp = document.getElementById("popUp");
  popUp.classList.add("active");
}

// Productos en el HTML

function pintarCards() {
  let producto = "";
  for (let i = 0; i < productos.length; i++) {
    producto =
      producto +
      `<div class="m-3 card text-center border-4 border-warning col-md-3 caja__producto">
  <img src="../images/productos/i3.jpg" alt="inteli3"/>

  <div class="card-body">
    <h5>${productos[i].nombre} ${productos[i].marca}</h5>

    <h3 class="card-text">$${productos[i].precio}</h3>
    <p class="card-text">12 Cuotas sin Interés</p>

    <button onclick="agregarCarrito(${i})" type="button" class="btn btn-primary">
      Comprar
    </button>
  </div>
</div>`;
  }
  document.getElementById("cards").innerHTML = producto;
}
pintarCards();

function agregarCarrito(i) {
  //Recibe como parametro, el indice que obtiene el boton "onclick" de cada tarjeta

  console.log(productosEnCarrito);
  productosEnCarrito.push(productos[i]);
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  ProductosCarrito(productos[i]);

  abrirPopUp();
  totalSuma(productosEnCarrito);
}

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
