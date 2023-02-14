const mainApp = document.getElementById("app");

mainApp.innerHTML += `<h2>Exemplo4</h2>`;

const nome = "Nikola Tesla";

mainApp.innerHTML += `<p>${nome}</p>`;

const arrayNome = [...nome];
mainApp.innerHTML += `<p>${arrayNome}</p>`;

mainApp.innerHTML += `<p>${nome[2]}</p>`;

/* nome.forEach(function(letra) {
  mainApp.innerHTML += `<p>${letra}</p>`;
}) */













mainApp.innerHTML += `<h2>Exemplo3</h2>`;

const frutas = ['Maçã', 'Melão'];
const legumes = ['Cebola', 'Cenoura'];
const verduras = ['Brócolis', 'Alface'];

const lista = [...frutas, ...legumes, ...verduras];

mainApp.innerHTML += `<p>${frutas}</p>`;
mainApp.innerHTML += `<p>${legumes}</p>`;
mainApp.innerHTML += `<p>${verduras}</p>`;
mainApp.innerHTML += `<p>${lista}</p>`;

mainApp.innerHTML += `<h2>Exemplo2</h2>`;

function imprimirPessoa({ nome, idade }) {
  mainApp.innerHTML += `<p>Pessoa: ${nome} / ${idade}</p>`;
}

let person = { nome: "Tio Bill", idade: 80 };
imprimirPessoa(person);

person = { nome: "Tio Bill", ano: 80 };
imprimirPessoa(person);

person = { nome: "Tio Bill", idade: 80, ano: 65 };
imprimirPessoa(person);







mainApp.innerHTML += `<h2>Exemplo</h2>`;

function sum(x, y, z) {
  return x + y + z;
}
const number = [1, 2, 3];

const result = sum(number[0], number[1], number[2]);
mainApp.innerHTML += `<p>R: ${result}</p>`;

const result2 = sum(...number);
mainApp.innerHTML += `<p>R2: ${result2}</p>`;

const numbers2 = [1, 2];
const result3 = sum(...numbers2);
mainApp.innerHTML += `<p>R3: ${result3}</p>`;

const numbers3 = [1, 2, 3, 4];
const result4 = sum(...numbers3);
mainApp.innerHTML += `<p>R4: ${result4}</p>`;





function toString(pessoa) {
  // const nome = pessoa.nome;
  // const idade = pessoa.idade;
  const { nome, idade } = pessoa;
  return `${nome} / ${idade}`;
}

let pessoas = [
  { nome: "Fulano", idade: 45 },
  { nome: "Ciclano", idade: 24 },
  { nome: "Beltrano", idade: 12 },
  { nome: "Deltrano", idade: 57 },
  { nome: "Xtrano", idade: 64 },
  { nome: "Nikola Tesla", idade: 89 },
];

const pessoa = { nome: "Fulano", idade: 45 };
mainApp.innerHTML += `<h2>Objeto</h2>`;

const pessoaB = pessoa;
mainApp.innerHTML += `<p>${toString(pessoa)}</p>`;
mainApp.innerHTML += `<p>${toString(pessoaB)}</p>`;

pessoa.nome = "Nikola Tesla";
mainApp.innerHTML += `<p>${toString(pessoa)}</p>`;
mainApp.innerHTML += `<p>${toString(pessoaB)}</p>`;

const pessoaC = { ...pessoa };
mainApp.innerHTML += `<p>${toString(pessoa)}</p>`;
mainApp.innerHTML += `<p>${toString(pessoaC)}</p>`;

pessoa.nome = "Alan Turing";
mainApp.innerHTML += `<p>A: ${toString(pessoa)}</p>`;
mainApp.innerHTML += `<p>B: ${toString(pessoaB)}</p>`;
mainApp.innerHTML += `<p>C: ${toString(pessoaC)}</p>`;





mainApp.innerHTML += `<h2>Array</h2>`;
// let htmlTable = "<table>";

const numeros = [1, 2, 3, 4, 5];
const numerosB = [numeros];
const numerosC = numeros;

mainApp.innerHTML += `<p>${numeros}</p>`;
mainApp.innerHTML += `<p>${numeros.length}</p>`;
mainApp.innerHTML += `<p>${numerosB}</p>`;
mainApp.innerHTML += `<p>${numerosB.length}</p>`;
mainApp.innerHTML += `<p>${numerosC}</p>`;
mainApp.innerHTML += `<p>${numerosC.length}</p>`;

numeros[1] = 1999;
mainApp.innerHTML += `<p>${numeros}</p>`;
mainApp.innerHTML += `<p>${numerosB}</p>`;
mainApp.innerHTML += `<p>${numerosC}</p>`;

const numerosD = [...numeros];
mainApp.innerHTML += `<p>D: ${numerosD}</p>`;
mainApp.innerHTML += `<p>D: ${numerosD.length}</p>`;

numeros[1] = -7865;
mainApp.innerHTML += `<p>Num: ${numeros}</p>`;
mainApp.innerHTML += `<p>D: ${numerosD}</p>`;

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

mainApp.innerHTML += `<p>Matriz: ${matriz}</p>`;

const matrizB = [...matriz];
mainApp.innerHTML += `<p>Matriz B: ${matrizB}</p>`;

matriz[1][2] = 9999;
matriz[3] = [10, 11, 12];
mainApp.innerHTML += `<p>Matriz: ${matriz}</p>`;
mainApp.innerHTML += `<p>Matriz B: ${matrizB}</p>`;



