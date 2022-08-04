/*let nombre = prompt("Ingrese su nombre: ")

alert("¡Bienvenido " + nombre + "!")

let reserva = prompt("a Qué clase desas asistir? YOGA/SPINNING/FUNCIONAL")

if((reserva == "YOGA") || (reserva == "yoga")) {
    alert("Elegiste YOGA")
    
    let yoga = prompt("Ingrese horario 18/19/20 hs")

    while(yoga != "ESC" ){
        switch (yoga) {
            case "18":
                alert("Horario reservado: 18HS");
                break;
            case "19":
                alert("Horario reservado: 19HS");
                break;
            case "20":
                alert("Horario reservado: 19HS");
                break;
            default:
                alert("horario incorrecto")
                break;
        }
        yoga = prompt("Ingrese horario 18/19/20 hs");
    }

} else if((reserva == "SPINNING") || (reserva == "spinning")) {
    alert("Elegiste SPINNING")
    
    let spinning = prompt("Ingrese horario 18/20/22 hs")

    while(spinning != "ESC" ){
        switch (spinning) {
            case "18":
                alert("Horario reservado: 18HS");
                break;
            case "20":
                alert("Horario reservado: 20HS");
                break;
            case "22":
                alert("Horario reservado: 22HS");
                break;
            default:
                alert("horario incorrecto")
                break;
        }
        spinning = prompt("Ingrese horario 18/20/22 hs");
    }


} else if((reserva == "FUNCIONAL") || (reserva == "funcional")) {
    alert("Elegiste FUNCIONAL")

    let funcional = prompt("Ingrese horario 17/19/21 hs")

    while(funcional != "ESC" ){
        switch (funcional) {
            case "17":
                alert("Horario reservado: 17HS");
                break;
            case "19":
                alert("Horario reservado: 19HS");
                break;
            case "21":
                alert("Horario reservado: 21HS");
                break;
            default:
                alert("horario incorrecto")
                break;
        }
        funcional = prompt("Ingrese horario 17/19/21 hs");
    }

} else {
    alert("La opción que ingresó no es válida")
}
*/

const productos = [{
    id:'1', 
    name:'mancuerna',
    precio: 100,
    cantidad: 0
}, {
    id:'2', 
    name:'barra',
    precio: 50,
    cantidad: 0
}, {
    id:'3', 
    name:'colchoneta',
    precio: 20,
    cantidad: 0
}]

const carrito = []
let cantidad ;
let continuar = true ;
let elemento
let formControl = 'SI'

alert(
    "Nombre " + productos[0].name + "! \n" +
    "Nombre " + productos[1].name + "! \n" + 
    "Nombre " + productos[2].name + "! \n" 
    )

do{
    elemento = prompt("Ingrese que elemento busca: ")
    const search = productos.find(e => e.name === elemento)
    
    if (search) {
        cantidad = prompt("Ingrese cuantos elementos quiere:")
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

alert(total)


