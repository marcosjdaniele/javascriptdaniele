const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carroCompra = document.getElementById("carrito");
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

  carroCompra.addEventListener("click", (e) => {
    e.preventDefault();
    compra.eliminarProducto(e);
  });

  carroCompra.addEventListener("change", (e) => {
    compra.obtenerEvento(e);
  });

  compra.calcularTotal();

  if (procesarCompraBtn)
    procesarCompraBtn.addEventListener("click", procesarCompra);
}

function procesarCompra(e) {
  if (compra.obtenerProductosLocalStorage().length === 0) {
    swal({
      title: "Oops..",
      text: "¡No hay productos, regresa a Comprar!",
      icon: "error",
      button: false,
      timer: 2000,
    });
    setTimeout(() => {
      location.href = "index.html";
    }, 2000);
  } else {
    swal({
      title: "¡Compra Finalizada!",
      text: "redireccionando a página principal..",
      icon: "success",
      button: false,
      timer: 2500,
    });
    setTimeout(() => {
      compra.vaciarLocalStorage();
      location.href = "index.html";
    }, 2500);
  }
}
