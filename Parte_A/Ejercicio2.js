
alert("Vamos a dibujar un rectangulo!!!")
let ancho = prompt("Ingrese el ancho:");
let alto = prompt("Ingrese el alto:");

function dibujarRectangulo(ancho, alto) {


  let result = ''; // resultado vacio para almacenar el valor pasado por el usuario

  // linea de arriba
  for (let i = 0; i < ancho; i++) {
    result += '* ';
  }

  result += '\n';

  // cuerpo del rectangulo
  for (i = 0; i < alto - 2; i++) {
    result += '*' + ' '.repeat(ancho * 2 - 3) + '*\n';
  }

  // linea de abajo
  for (let i = 0; i < ancho; i++) {
    result += '* ';
  }

  return result;
}

// formas de imprimir por pantalla: SALIDA 

console.log(dibujarRectangulo(ancho, alto));
//alert(dibujarRectangulo(ancho, alto));
//document.write(dibujarRectangulo(ancho,alto));


// pedir datos: ENTRADA
// promt (text, valor)







