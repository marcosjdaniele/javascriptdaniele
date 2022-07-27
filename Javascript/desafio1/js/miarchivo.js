let name = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")
let edad = prompt ("ingrese su edad")

alert("¡Hola " + name + " " + apellido + ", de " + edad + " años!")

/*let num = parseInt(prompt("Ingresá un número del 1 al 10"))

for(let i = 0; i<=10; i++){
    console.log(num + i)
}
*/

let color = prompt("Ingresá un color")

if((color == "rojo") || (color == "amarillo") || (color == "azul")){
    alert("El color " + color + " es primario")
}else{
    alert("El color " + color + " es secundario o terciario")
}