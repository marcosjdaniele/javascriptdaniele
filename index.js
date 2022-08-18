const productos = [
  {
    id: 1,
    name: "mancuernas",
    precio: 100,
    cantidad: 0,
  },
  {
    id: 2,
    name: "barras",
    precio: 50,
    cantidad: 0,
  },
  {
    id: 3,
    name: "colchonetas",
    precio: 20,
    cantidad: 0,
  },
];

const carrito = [];
let cantidad;
let continuar = true;
let elemento;
let formControl = "SI";

alert("¡Bienvenido a nuestra pagina de insumos deportivos!");

const botonSeleccionElemento = document.getElementById("botonProducto");
botonSeleccionElemento.addEventListener("click", seleccionarProducto);
let spanProducto = document.getElementById("productoSeleccionado");

function seleccionarProducto() {
  let inputColchoneta = document.getElementById("colchonetas");
  let inputMancuerna = document.getElementById("mancuernas");
  let inputBarra = document.getElementById("barras");

  if (inputColchoneta.checked) {
    alert("Seleccionaste Colchonetas");
    carrito.push(productos[2]);
    spanProducto.innerHTML = "Colchonetas";
  } else if (inputMancuerna.checked) {
    alert("Seleccionaste Mancuernas");
    carrito.push(productos[1]);
    spanProducto.innerHTML = "Mancuernas";
  } else if (inputBarra.checked) {
    alert("Seleccionaste Barras");
    carrito.push(productos[3]);
    spanProducto.innerHTML = "Barras";
  } else {
    alert("SELECCIONA UN ELEMENTO POR FAVOR");
  }
}

let InputCantidadElemento = document.getElementById("cantidadElementos");
const botonCantidadElemento = document.getElementById("botonAceptar");
let total = 0;
let spanTotal = document.getElementById("total");

botonCantidadElemento.addEventListener("click", () => {
  elemento = document.getElementById("cantidadElementos");
  cantidad = parseInt(elemento.value);

  carrito.find((e) => {
    e.name === spanProducto.textContent.toLowerCase()
      ? (e.cantidad += cantidad)
      : null;
  });

  carrito.forEach((e) => {
    total += e.precio * e.cantidad;
    spanTotal.innerHTML = `${total}`;
  });
});
