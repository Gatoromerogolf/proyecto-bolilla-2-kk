// hay que leer la cantidad de pelotas de los sábados
// agregarle la cantidad de la gira
// leer el campo del html y mandarle el valor.

const filas = 12;
const columnas = 2;

// Crear la matriz de 12x2 con ceros
let matrizPelotas = new Array(filas).fill(null).map(() => new Array(columnas).fill(0));

for (player of players2) {
  buscaroInsertar(matrizPelotas, player.play, player.pg);
}

let ctddPelotas = document.getElementById("pelotas");
let nombrePelotas = document.getElementById("pelotudo");
let pelsabado = document.getElementById("pelotas");
let pelgira = document.getElementById("pelotudo");

function buscaroInsertar(matriz, valor, sumar) {
  for (indice=0; indice<12; indice++){
    if (matriz[indice][0] === valor) {
      matriz[indice][1] += sumar;
      indice = 12;}
      else{
        if (matriz[indice][0] === 0){
          matriz[indice][0] = valor;
          matriz[indice][1] = sumar;
          indice=12;}
    }
  }
}

// hay que agregar en la matriz las pelotas de la gira (datosRanking)

for (player of puntosRanking)
  buscaroInsertar(matrizPelotas, player.playRkg, player.pelgan);

// ordenar la matriz para sacar el mayor valor

matrizPelotas.sort ((a, b) => b - a);

ctddPelotas.textContent = matrizPelotas[0][1];
nombrePelotas.textContent = matrizPelotas[0][0];

let valor = matrizPelotas[0][0]; 

document.addEventListener('DOMContentLoaded', (event) => {
    let imgSrc;

    switch (valor) {
        case "Diegui":
          imgSrc = "assets/images/marco-diegui.png";
          break;
        case "Negro":
          imgSrc = "assets/images/marco-negro.png";
          break;
        case "Torni":
          imgSrc = "assets/images/marco-torni.png";
          break;
        case "Gaby":
          imgSrc = "assets/images/marco-gaby.jpg";
          break;
        case "Joaco":
          imgSrc = "assets/images/marco-joaco.jpg";
          break;
        // Agrega más casos según sea necesario
        default:
            imgSrc = "assets/images/marco-tiger.png";
    }

    document.getElementById('imagenDinamica').src = imgSrc;
});
