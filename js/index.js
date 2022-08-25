const productos = [
  {
    id: 0,
    name: "mancuernas",
    precio: 2500,
    cantidad: 0,
  },
  {
    id: 1,
    name: "barras",
    precio: 7500,
    cantidad: 0,
  },
  {
    id: 2,
    name: "colchonetas",
    precio: 1000,
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
    carrito.push(productos[1]);
    spanProducto.innerHTML = "Colchonetas";
    sessionStorage.setItem("producto1", JSON.stringify(productos[1]));
  } else if (inputMancuerna.checked) {
    alert("Seleccionaste Mancuernas");
    carrito.push(productos[0]);
    spanProducto.innerHTML = "Mancuernas";
    sessionStorage.setItem("producto0", JSON.stringify(productos[0]));
  } else if (inputBarra.checked) {
    alert("Seleccionaste Barras");
    carrito.push(productos[2]);
    spanProducto.innerHTML = "Barras";
    sessionStorage.setItem("producto2", JSON.stringify(productos[2]));
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
