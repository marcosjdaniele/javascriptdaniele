const productos = [{
    id:'1', 
    name:'mancuernas',
    precio: 100,
    cantidad: 0
}, {
    id:'2', 
    name:'barras',
    precio: 50,
    cantidad: 0
}, {
    id:'3', 
    name:'colchonetas',
    precio: 20,
    cantidad: 0
}]

const carrito = []
let cantidad ;
let continuar = true ;
let elemento
let formControl = 'SI'
alert("¡Bienvenido a nuestra pagina de insumos deportivos!")

alert("Tenemos en Stock: \n" +
    productos[0].name + "! \n" +
    productos[1].name + "! \n" + 
    productos[2].name + "! \n" 
    )

do{
    elemento = prompt("Ingrese que elemento busca: ")
    const search = productos.find(e => e.name === elemento)
    
    if (search) {
        cantidad = prompt("Ingrese qué cantidad del mismo desea:")
    } else{
        alert("El elemento no existe")
    }
    
    alert("El total va a ser " + search.precio * cantidad )

    search.cantidad = cantidad
    carrito.push(search)
    formControl = prompt("desea continuar? SI/NO")
} 
while(formControl.toLowerCase() === "si")

let total = 0

carrito.forEach(e => total += e.precio * e.cantidad)

alert("Su saldo final va a ser de: "+ total)


