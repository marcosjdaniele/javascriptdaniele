const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById("carrito");
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

function traerEmail(email) {
  if (email !== "") {
    fetch(`https://api.eva.pingutil.com/email?email=${email}`, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        swal({
          title: "Éxito!",
          text: "¡Tu email es correcto!",
          icon: "success",
          button: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  } else {
    swal({
      title: "Oops..",
      text: "ingresar email",
      icon: "error",
      button: false,
      timer: 1200,
    });
  }
}
