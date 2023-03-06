const mainApp = document.getElementById("app");

mainApp.innerHTML += `<h1>Aula 06</h1>`;


const operar =
  (op1, op2, operador) => `${op1}, ${op2} = ${operador(op1, op2)}`;

const somar = (op1, op2) => op1 + op2;
const multiplicar = (op1, op2) => op1 * op2;

mainApp.innerHTML += `<p>${operar(5, 5, somar)}</p>`;
mainApp.innerHTML += `<p>${operar(5, 5, multiplicar)}</p>`;



/* const func = () => {
  mainApp.innerHTML += `<p>Nada</p>`;
} */

/* const func = a => {
  mainApp.innerHTML += `<p>Nada</p>`;
} */

const func = _ => {
  mainApp.innerHTML += `<p>${_}</p>`;
}

func("Nada");








mainApp.innerHTML += `<h2>Funções</h2>`;


function nome(arg1, arg2) {
  return arg1 + arg2;
}

/* const somar = function (arg1, arg2) {
  return arg1 + arg2;
} */

function imprimir(
  pontoFinal,
  nome = 'Fulano',
  tratamento = 'Sr.') {
  return `Olá, ${tratamento} ${nome}${pontoFinal}`;
}

mainApp.innerHTML += `<p>${imprimir('!', 'Thiago', 'Sr.')}</p>`;
mainApp.innerHTML += `<p>${imprimir('!')}</p>`;
mainApp.innerHTML += `<p>${imprimir('.','Thiago')}</p>`;
mainApp.innerHTML += `<p>${imprimir()}</p>`;

// const operacao = function () {}
const operacao = (arg1, arg2) => {
  return arg1 + arg2;
}

mainApp.innerHTML += `<p>${operacao(5, 5)}</p>`;
// mainApp.innerHTML += `<p>${typeof operacao}</p>`;

const operacao2 = arg1 => {
  return arg1 * arg1;
}

mainApp.innerHTML += `<p>${operacao2(5)}</p>`;

const operacao3 = arg1 => arg1 ** arg1;

mainApp.innerHTML += `<p>${operacao3(5)}</p>`;

const operacao4 = arg1 => mainApp.innerHTML += `<p>${operacao2(5)}</p>`;


const clientes = [
  { nome: "Fulano", idade: 18, end: "Rua A", tel: 212121 }, // 0
  { nome: "Ciclano", idade: 90, end: "Rua B", tel: 222222 }, // 1
  { nome: "Beltrano", idade: 50, end: "Rua C", tel: 232323 }
];

clientes.forEach(
  cliente => mainApp.innerHTML += `<p>${cliente.nome}</p>`
);

