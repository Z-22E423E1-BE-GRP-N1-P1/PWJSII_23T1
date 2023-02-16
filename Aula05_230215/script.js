const mainApp = document.getElementById("app");

mainApp.innerHTML += `<h1>Aula 05</h1>`;
mainApp.innerHTML += `<h2>Estutura de Repetição</h2>`;

mainApp.innerHTML += `<h3>Break / Continue</h3>`;

mainApp.innerHTML += `<h2>Break</h2>`;

let contagem = 0;

while (contagem <= 10) {
  contagem++;
  if (contagem == 8) break;
  mainApp.innerHTML += `<p>${contagem}</p>`;
}

mainApp.innerHTML += `<h2>Continue</h2>`;

contagem = 0;
while (contagem <= 10) {
  contagem++;
  if (contagem == 8) {
    mainApp.innerHTML += `<p>Encontrei o 8</p>`;
    continue;
  }
  mainApp.innerHTML += `<p>${contagem}</p>`;
}

mainApp.innerHTML += `<h3>Do .. While</h3>`;

mainApp.innerHTML += `<h2>Menu</h2>`;

let opcao = 0;
let opcoesValidas = [0, 1, 2];

/* while (true) {
  // menu
  // break;
} */

while (false || !opcoesValidas.includes(opcao)) {
  console.log(`1 - Inserir`);
  console.log(`2 - Excluir`);
  console.log(`0 - Sair`);
  // opcao = +prompt(`Escolha uma opção:`);
}

do {
  console.log(`1 - Inserir`);
  console.log(`2 - Excluir`);
  console.log(`0 - Sair`);
  // opcao = +prompt(`Escolha uma opção:`);
} while (false || !opcoesValidas.includes(opcao));


let numDo = 0;
do {
  mainApp.innerHTML += `<p>${numDo}</p>`;
  numDo++;
} while (numDo < 10);



mainApp.innerHTML += `<h3>While</h3>`;

// Dado um array de nomes, faça um script que verifique se um determinado nome está neste array, usando while.

let nomes = ["Fulano", "Ciclano", "Beltrano", "Xtrano", "Deltrano"];

let naoEncontrado = true;
let mensagem = "Não encontrado.";
// let indice = 0;

// while (naoEncontrado && indice < nomes.length > 0) {
/* while (naoEncontrado && nomes.length > 0) {
  if (nomes[0] === "Htrano"){
    mensagem = "Encontrado.";
    naoEncontrado = false;
  } else {
    nomes.shift();
  }
} */
mainApp.innerHTML += `<p>${mensagem}</p>`;



let num = 0;
while (num < 10) { // num == 10
  mainApp.innerHTML += `<p>${num}</p>`;
  num++;
}
mainApp.innerHTML += `<p>Fim do While.</p>`;

/* let numB = 0
let numA = 100
for (let numB = 0; numB < 100 || numA > 1000;) {
  numA++;
  numB++;
  mainApp.innerHTML += `<p>${num}</p>`;
} */

