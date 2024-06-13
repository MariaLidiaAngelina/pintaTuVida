//Funciones
function saludarConNombre() {
    let nombre = prompt('Ingresa tu nombre')
    alert('Hola ' + nombre + ' te damos la bienvenida a nuestra tienda online')
}

function calcularPintura() {
    let total = 0;
    let pintura = 0;
    for (let i = 1; i <= 4; i++) {

        let ancho = parseFloat(prompt("Ingresa los metros de ancho de tu pared"));
        let alto = parseFloat(prompt("Ingresa los metros de alto de tu pared"));
        let superficie = (ancho * alto);
        let pintura = superficie / 12;

        alert("Pared nro " + i);
        alert("Superficie de tu pared es " + superficie + " metros cuadrados");
        alert("Necesitas " + pintura + " litros de pintura por mano para cubrir tu pared");
        total += pintura;
    };

    alert(" Necesitas un total de " + total + " litros de pintura por mano")
}

function despedirseNombre(){
    alert('Muchas gracias por elegirnos!!!')
}
//Variables declaradas
let nombre;
let opcion;
let colores = ' '
let precio = 0;
let cantidad = 0;
let seguirComprando = false;
let precioTotal = 0;
let cantidadTotal = 0;


//Codigo
saludarConNombre()

opcion = parseInt(prompt('¿ Por dónde quieres empezar? \n 1- Calcular la pintura que necesitas (4 paredes) \n 2- Elegir entre colores disponibles \n 3 -Comprar productos \n- 4- Terminar '))
while (isNaN(opcion) || opcion <= 0 || opcion > 4) {
    alert('Debes seleccionar una opción válida!');
    opcion = parseInt(prompt('¿ Por dónde quieres empezar? \n 1- Calcular la pintura que necesitas (4 paredes) \n 2- Elegir entre colores disponibles \n 3 -Comprar productos \n- 4- Terminar '));
}

while (opcion !== 4) {
    if (opcion === 1) {
        calcularPintura();
      break
    }
    if (opcion === 2 || opcion === 3) {

        do {
            let colores = prompt(
                "Ingresa alguna de estas palabras (naranja, verde, blanco, rosa) para conocer el precio"
            ).toLowerCase();
            cantidad = parseInt(prompt('¿Cuántos litros quieres comprar?'));

            while (isNaN(cantidad) || cantidad <= 0) {
                alert('Debes agregar una cantidad válida!');
                cantidad = parseInt(prompt('Cuántos litros quieres comprar?'));
            };


            switch (colores) {
                case "blanco":
                    precio = 2000
                    alert("2000 el litro");
                    break;
                case "verde":
                    precio = 2500
                    alert("2500 el litro");
                    break;
                case "naranja":
                    precio = 2400
                    alert("2400 el litro");
                    break;
                case "rosa":
                    precio = 2700
                    alert("2700 el litro");
                    break;
                default:
                    alert("Solo tenemos naranja, verde, blanco, rosa");
                    break;
            }

            precioTotal += precio * cantidad;
            cantidadTotal += cantidad;

            seguirComprando = confirm('¿Deseas seguir comprando?');

        } while (seguirComprando);

        alert('Compraste ' + cantidadTotal + ' litros de pintura y el precio final es de $' + precioTotal);
         opcion = 4;
    }
}
opcion===4;   despedirseNombre();

