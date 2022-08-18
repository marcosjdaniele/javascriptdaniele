
const productos = [
	{
		id: "1",
		name: "mancuernas",
		precio: 100,
		cantidad: 0,
	},
	{
		id: "2",
		name: "barras",
		precio: 50,
		cantidad: 0,
	},
	{
		id: "3",
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

const botonSeleccionElemento = document.getElementById('botonProducto')
    botonSeleccionElemento.addEventListener('click', seleccionarProducto)

function seleccionarProducto() {
    let inputColchoneta = document.getElementById('colchonetas')
    let inputMancuerna = document.getElementById('mancuernas')
    let inputBarra = document.getElementById('barras')
    let spanProducto = document.getElementById('productoSeleccionado')
    
    if (inputColchoneta.checked) {
		alert("Seleccionaste Colchonetas")
        spanProducto.innerHTML = 'Colchonetas'
    } else if (inputMancuerna.checked) {
		alert("Seleccionaste Mancuernas")
        spanProducto.innerHTML = 'Mancuernas'
    } else if (inputBarra.checked) {
		alert("Seleccionaste Barras")
        spanProducto.innerHTML = 'Barras'
    } else {
        alert('SELECCIONA UN ELEMENTO POR FAVOR')
    }
}

let InputCantidadElemento = document.getElementById('cantidadElementos')
let botonCantidadElemento = document.getElementById('botonAceptar')

elemento = document.getElementById('productoSeleccionado')
const search = productos.find((e) => e.name === elemento);
cantidad = InputCantidadElemento;
console.log( search.precio * cantidad);
search.cantidad = cantidad;
carrito.push(search);

let spanTotal = document.getElementById('total')
let total = 0;
carrito.forEach((e) => (total += e.precio * e.cantidad));
spanTotal.innerHTML = total


/*

do {
	elemento = prompt("Ingrese que elemento busca: ");
	const search = productos.find((e) => e.name === elemento);
	console.log(search);

	if (search) {
		cantidad = prompt("Ingrese qué cantidad del mismo desea:");
		alert("El total va a ser " + search.precio * cantidad);
		search.cantidad = cantidad;
		carrito.push(search);
	} else {
		alert("El elemento no existe");
	}

	formControl = prompt("desea continuar? SI/NO");
} while (formControl.toLowerCase() === "si");

let total = 0;

carrito.forEach((e) => (total += e.precio * e.cantidad));

alert("Su saldo final va a ser de: " + total);
*/