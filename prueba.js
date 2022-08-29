class Carrito {
  comprarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
      const producto = e.target.parentElement.parentElement;
      this.leerDatosProducto(producto);
    }
  }

  insertarCarrito(producto){
    const row = document.createElement('tr'),
    row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
    `;
    listaProductos.appendChild(row);
  }

  
}

const carro = new Carrito();
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");

cargarEventos();

function cargarEventos() {
  productos.addEventListener("click", (e) => {
    carro.comprarProducto(e);
  });
}
