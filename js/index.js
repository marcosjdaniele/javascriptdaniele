class Carrito {
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

  obtenerProductosLocalStorage() {
    let productoLS;
    if (localStorage.getItem("productos") === null) {
      productoLS = [];
    } else {
      productoLS = JSON.parse(localStorage.getItem("productos"));
    }
    return productoLS;
  }

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
    document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
  }

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

  vaciarCarrito(e) {
    e.preventDefault();
    while (listaProductos.firstChild) {
      listaProductos.removeChild(listaProductos.firstChild);
    }
    this.vaciarLocalStorage();
    return false;
  }

  guardarProductosLocalStorage(producto) {
    let productos;
    productos = this.obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
  }

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
                    <button class="borrar-producto fas fa-times-circle" style="font-size:30px" data-id="${
                      producto.id
                    }">x</button>
                </td>
            `;
      listaCompra.appendChild(row);
    });
  }

  eliminarProductoLocalStorage(cursoID) {
    let cursosLS;
    cursosLS = this.obtenerProductosLocalStorage();
    cursosLS.forEach(function (cursoLS, index) {
      if (cursoLS.id === cursoID) {
        cursosLS.splice(index, 1);
      }
    });
    localStorage.setItem("cursos", JSON.stringify(cursosLS));
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
