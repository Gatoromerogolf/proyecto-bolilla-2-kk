//  hay que leer datosRanking  y llenar una matriz.
//  completar los cuatro mejores de apertura
//  completar los cuatro mejores de clausura (si no están???)
//  sumar los valores
//  ordenar la matriz por la suma de valores
//  presentar y dar las urras!!!!

// crea la matriz para llenar
let matrizRanking = [];
let indRkg = 0;

// llena los valors de la gira
for (const puntosRkg of puntosRanking) {
  if (!matrizRanking[indRkg]) {
    matrizRanking[indRkg] = [];
  }
  matrizRanking[indRkg][0] = puntosRkg.playRkg;
  matrizRanking[indRkg][2] = puntosRkg.sierra;
  matrizRanking[indRkg][3] = puntosRkg.acantilados;
  matrizRanking[indRkg][4] = puntosRkg.tulsa;
  matrizRanking[indRkg][1] =
    puntosRkg.sierra + puntosRkg.acantilados + puntosRkg.tulsa;  
  indRkg++;
}


// Toma datos de los netos de Apertura
// los ordena por netos crecientes, para tomar los 4 primeros
//ordena por fec para presentarlo por fecha
for (const play in playersData) {
  playersData[play].sort((a, b) => a.neto - b.neto);
  playersData[play] = playersData[play].slice(0, 4);
  playersData[play].sort((a, b) => a.fec - b.fec);
}

// agrega a la matriz estos 4 valores

for (play in playersData) {
  let filaBuscada = matrizRanking.findIndex((fila) => fila[0] === play);
  if(filaBuscada === -1){
    console.log ("valor no encontrado: " , play)
  }
    else{
    matrizRanking[filaBuscada][5] = playersData[play][0].neto;
    matrizRanking[filaBuscada][6] = playersData[play][1].neto;
    matrizRanking[filaBuscada][7] = playersData[play][2].neto;
    if (playersData[play].length > 3){
        matrizRanking[filaBuscada][8] = playersData[play][3].neto}
      else{
        matrizRanking[filaBuscada][8] = 150}  
    for (let jota=5; jota<9; jota++){
      matrizRanking[filaBuscada][1] += matrizRanking[filaBuscada][jota];
    }
  }
}
// ordena la matriz por segunda columna

matrizRanking.sort((a, b) => a[1] - b[1]);

//  presenta resultados
//  ubica la matriz

 let lineaRanking = document.getElementById("lineaRanking");

// Agrega el nombre del jugador como la primera celda
for (indRkg = 0; indRkg < 12; indRkg++) {
  lineaRanking = tablaRanking.insertRow();
  const nombreCeldaRkg = lineaRanking.insertCell();
  nombreCeldaRkg.textContent = matrizRanking[indRkg][0];

  const totPuntos = lineaRanking.insertCell();
  totPuntos.textContent = matrizRanking[indRkg][1];

  const sierra = lineaRanking.insertCell();
  sierra.textContent = matrizRanking[indRkg][2];

  const acantilados = lineaRanking.insertCell();
  acantilados.textContent = matrizRanking[indRkg][3];

  const tulsa = lineaRanking.insertCell();
  tulsa.textContent = matrizRanking[indRkg][4];

  const unoAper = lineaRanking.insertCell();
  unoAper.textContent = matrizRanking[indRkg][5];

  const dosAper = lineaRanking.insertCell();
  dosAper.textContent = matrizRanking[indRkg][6];

  const tresAper = lineaRanking.insertCell();
  tresAper.textContent = matrizRanking[indRkg][7];

  const cuatroAper = lineaRanking.insertCell();
  cuatroAper.textContent = matrizRanking[indRkg][8];
}

// let lineaRankingVs = document.getElementById("lineaRankingVs");

// for (indice = 0; indice < 6; indRkg++) {
//   lineaRankingVs = tablaRankingVs.insertRow();

//   let nombreCeldaRkg = lineaRanking.insertCell();
//   nombreCeldaRkg.textContent = matrizRanking[indice][0];

//   nombreCeldaRkg = lineaRanking.insertCell();
//   nombreCeldaRkg.textContent = "vs";

//   nombreCeldaRkg = lineaRanking.insertCell();
//   nombreCeldaRkg.textContent = matrizRanking[11-indice][0];
// }