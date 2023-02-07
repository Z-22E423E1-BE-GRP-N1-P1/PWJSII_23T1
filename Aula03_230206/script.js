const mainApp = document.getElementById("app");

let pessoas = [
  { nome: "Fulano", idade: 45, toString: function() { return this.nome } },
  { nome: "Ciclano", idade: 24, toString: function() { return this.nome } },
  { nome: "Beltrano", idade: 12, toString: function() { return this.nome } },
  { nome: "Deltrano", idade: 57, toString: function() { return this.nome } },
  { nome: "Xtrano", idade: 64, toString: function() { return this.nome } },
];

let nomes = ["Fulano", "Ciclano", "Beltrano", "Xtrano", "Deltrano"];

mainApp.innerHTML += `<h3>Sort</h3>`;

mainApp.innerHTML += `<p>Sort: ${pessoas.sort(ordenarPessoas)}</p>`;

function ordenarPessoas(pessoaA, pessoaB) {
  const idadeA = pessoaA.idade;
  const idadeB = pessoaB.idade;
  return idadeA - idadeB;
}

mainApp.innerHTML += `<p>Sort: ${nomes}</p>`;
mainApp.innerHTML += `<p>Sort: ${nomes.sort()}</p>`;

const numeros = [1, 12, 23, 32, 334, 145, 1554, 232];
mainApp.innerHTML += `<p>Sort: ${numeros}</p>`;
mainApp.innerHTML += `<p>Sort: ${numeros.sort()}</p>`;
mainApp.innerHTML += `<p>Sort: ${numeros.sort(ordenarNum)}</p>`;

function ordenarNum(numA, numB) {
  return numA - numB;
}

/* function ordenarNum(numA, numB) {
  if (numA > numB) return 1;
  else if (numA === numB) return 0;
  else return -1;
} */


mainApp.innerHTML += `<h3>Slice</h3>`;

mainApp.innerHTML += `<p>Slice: ${nomes.slice()}</p>`;
mainApp.innerHTML += `<p>Slice: ${nomes.slice(1)}</p>`;
mainApp.innerHTML += `<p>Slice: ${nomes.slice(1, 3)}</p>`;
mainApp.innerHTML += `<p>Slice: ${nomes.slice(-1)}</p>`;
mainApp.innerHTML += `<p>Slice: ${nomes.slice(-2)}</p>`;


mainApp.innerHTML += `<h3>LastIndexOf</h3>`;

mainApp.innerHTML += `<p>LastIndexOf: ${nomes.lastIndexOf("Ciclano")}</p>`;
mainApp.innerHTML += `<p>LastIndexOf: ${nomes.lastIndexOf("Ciclano", 2)}</p>`;

mainApp.innerHTML += `<p>IndexOf</p>`;

mainApp.innerHTML += `<p>IndexOf: ${nomes.indexOf("Ciclano")}</p>`;
mainApp.innerHTML += `<p>IndexOf: ${nomes.indexOf("Ciclano", 2)}</p>`;

mainApp.innerHTML += `<p>ToString</p>`;

mainApp.innerHTML += `<p>Join: ${nomes.join()}</p>`;
mainApp.innerHTML += `<p>ToString: ${nomes.toString()}</p>`;

mainApp.innerHTML += `<p>Join</p>`;

mainApp.innerHTML += `<p>Join: ${nomes.join()}</p>`;
mainApp.innerHTML += `<p>Join: ${nomes.join(";")}</p>`;
mainApp.innerHTML += `<p>Join: ${nomes.join(" | -> ")}</p>`;
mainApp.innerHTML += `<p>Join: ${nomes.join(null)}</p>`;


mainApp.innerHTML += `<p>Concat</p>`;
let outrosNomes = ["Deltrano", "Tetrano", "Xtrano"];

const nomesConcat = nomes.concat(outrosNomes/* , nomes */);
mainApp.innerHTML += `<p>${nomes}</p>`;
mainApp.innerHTML += `<p>${nomesConcat}</p>`;



mainApp.innerHTML += `<p>Shift / Unshift</p>`;

const primeiroNome = nomes.shift(); // 2
mainApp.innerHTML += `<p>${primeiroNome}</p>`;

const novoTamanho = nomes.unshift("Zetrano", 300); // 4
mainApp.innerHTML += `<p>${novoTamanho}</p>`;

mainApp.innerHTML += `<p>${nomes}</p>`;

// MainApp
// main_app
