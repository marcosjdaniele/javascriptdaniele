const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const procesarCompraBtn = document.getElementById("procesar-compra");
const cliente = document.getElementById("cliente");
const correo = document.getElementById("correo");
const email = document.getElementById("correo").textContent;
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
    traerEmail(email.value);
  });
}

let requestOptions = {
  method: "GET",
  redirect: "follow",
};

function traerEmail(email) {
  fetch(`https://api.eva.pingutil.com/email?email=${email}`, requestOptions)
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
