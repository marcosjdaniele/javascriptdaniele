const carro = new Carrito();
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const procesarPedidoBtn = document.getElementById("procesar-pedido");

cargarEventos();

function cargarEventos() {
  productos.addEventListener("click", (e) => {
    e.preventDefault();
    carro.comprarProducto(e);
  });

  carrito.addEventListener("click", (e) => {
    e.preventDefault();
    carro.eliminarProducto(e);
  });

  vaciarCarritoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    carro.vaciarCarrito(e);
    swal({
      text: "¡Se vació el carrito!",
      icon: "info",
      button: false,
      timer: 1000,
    });
  });

  document.addEventListener("DOMContentLoaded", carro.leerLocalStorage());

  procesarPedidoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    carro.procesarPedido(e);
  });
}
