const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const procesarCompraBtn = document.getElementById("procesar-compra");
const cliente = document.getElementById("cliente");
const email = document.getElementById("correo");
const botonValidar = document.getElementById("btnValidar");

cargarEventListeners();

function cargarEventListeners() {
  document.addEventListener(
    "DOMContentLoaded",
    compra.leerLocalStorageCompra()
  );

  carrito.addEventListener("click", (e) => {
    compra.eliminarProducto(e);
  });

  carrito.addEventListener("change", (e) => {
    compra.obtenerEvento(e);
  });

  compra.calcularTotal();

  botonValidar.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("correo");
    traerEmail(email.value);
  });
}

let requestOptions = {
  method: "GET",
  redirect: "follow",
};
