class Carrito {
  //Leer datos producto para insertar en carrito
  leerDatosProducto(producto) {
    const infoProducto = {
      imagen: producto.querySelector("img").src,
      titulo: producto.querySelector("h4").textContent,
      precio: producto.querySelector(".precio span").textContent,
      cantidad: producto.querySelector("input").value,
      id: producto.querySelector("a").getAttribute("data-id"),
    };
    this.insertarCarrito(infoProducto);
  }

  //Comprueba que haya productos en el LS
  obtenerProductosLocalStorage() {
    let productoLS;
    if (localStorage.getItem("productos") === null) {
      productoLS = [];
    } else {
      productoLS = JSON.parse(localStorage.getItem("productos"));
    }
    return productoLS;
  }

  //Calcula el total del carrito
  calcularTotal() {
    let productoLS;
    let total = 0;
    productoLS = this.obtenerProductosLocalStorage();
    for (let index = 0; index < productoLS.length; index++) {
      let element = Number(
        productoLS[index].precio * productoLS[index].cantidad
      );
      total = total + element;
    }
    if (document.getElementById("total"))
      document.getElementById("total").innerHTML = "$ " + total;
  }

  //Agrega un producto al carrito
  comprarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
      const producto = e.target.parentElement.parentElement;
      this.leerDatosProducto(producto);
      swal({
        text: "Se agregó al carrito!",
        icon: "success",
        button: false,
        timer: 1000,
      });
    }
  }

  vaciarLocalStorage() {
    localStorage.clear();
  }

  //Muestra el producto seleccionado en el carrito
  insertarCarrito(producto) {
    const row = document.createElement("tr");
    const total = producto.precio * producto.cantidad;
    row.innerHTML = `
            <td>
              <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.cantidad}</td>
            <td>${total}</td>
            <td>
              <button class="btn btn-check borrar-producto" data-id="${producto.id}">x</button>
            </td>
    `;
    listaProductos.appendChild(row);
    this.guardarProductosLocalStorage(producto);
  }

  //Elimina un producto del LS
  eliminarProductoLocalStorage(productoID) {
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS, index) {
      if (productoLS.id === productoID) {
        productosLS.splice(index, 1);
      }
    });
    localStorage.setItem("productos", JSON.stringify(productosLS));
  }

  //Elimina un producto del carrito
  eliminarProducto(e) {
    e.preventDefault();
    let producto, productoID;
    if (e.target.classList.contains("borrar-producto")) {
      e.target.parentElement.parentElement.remove();
      producto = e.target.parentElement.parentElement;
      productoID = producto.querySelector("button").getAttribute("data-id");
    }
    this.eliminarProductoLocalStorage(productoID);
    this.calcularTotal();
  }

  //Vaciar todos los productos del carrito
  vaciarCarrito(e) {
    e.preventDefault();
    while (listaProductos.firstChild) {
      listaProductos.removeChild(listaProductos.firstChild);
    }
    this.vaciarLocalStorage();
    return false;
  }

  //Agrega un producto al LS
  guardarProductosLocalStorage(producto) {
    let productos;
    productos = this.obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  //Agrega los productos guardados del LS al carrito
  leerLocalStorage() {
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (producto) {
      const row = document.createElement("tr");
      const total = producto.precio * producto.cantidad;
      row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.cantidad}</td>
                <td>${total}</td>
                <td>
                  <button class="borrar-producto fas fa-times-circle" data-id="${producto.id}">x</button>
            `;
      listaProductos.appendChild(row);
    });
  }

  //guarda los elementos del carrito de compra final y los muestra
  leerLocalStorageCompra() {
    let productoLS;
    productoLS = this.obtenerProductosLocalStorage();
    productoLS.forEach(function (producto) {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>${producto.cantidad}</td>
                <td id="subtotal">${producto.precio * producto.cantidad}</td>
                <td>
                    <button class="borrar-producto" data-id="${
                      producto.id
                    }">X</button>
                </td>
            `;
      if (listaCompra) listaCompra.appendChild(row);
    });
  }

  //Elimina de a un producto del LS
  eliminarProductoLocalStorage(productoID) {
    let cursoseLS;
    cursoseLS = this.obtenerProductosLocalStorage();
    cursoseLS.forEach(function (cursoLS, index) {
      if (cursoLS.id === productoID) {
        cursoseLS.splice(index, 1);
      }
    });
    localStorage.setItem("productos", JSON.stringify(cursoseLS));
  }

  procesarPedido(e) {
    e.preventDefault();
    console.log();
    if (this.obtenerProductosLocalStorage().length === 0) {
      swal({
        title: "Oops..",
        text: "¡Tu carrito está vacio!",
        icon: "error",
        button: false,
        timer: 1000,
      });
    } else {
      location.href = "compra.html";
    }
  }
}

fetch("/data.json")
  .then((resp) => resp.json())
  .then((data) => mostrarData(data));

const mostrarData = (data) => {
  let cardsContent = "";
  data.forEach((item, index) => {
    cardsContent += `
    <div class="card p-2 m-2 shadow-lg p-2 mb-5 bg-black bg-opacity-75 text-light rounded">
    <div class="card-header">
                  <h4 class="my-0 font-weight-bold">${item.nombre}</h4>
                </div>
                <div class="card-body">
                  <img src="${item.imagen}" class="card-img-top" />
                  <h1 class="card-title pricing-card-title precio">
                    $ <span class="">${item.precio}</span>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>${item.descripcion}</li>
                    <li></li>
                  </ul>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Elija una cantidad"
                    aria-label="Cantidad Elementos"
                    aria-describedby="button-addon2"
                  />
                  <a
                    href=""
                    class="btn d-grid col-12 mx-auto btn-outline-light agregar-carrito"
                    type="button"
                    data-id="${item.id}"
                  >
                    Comprar
                  </a>
                </div>
                </div>`;
  });

  if (document.getElementById("cardsContent"))
    document.getElementById("cardsContent").innerHTML = cardsContent;
};
