const mainApp = document.getElementById("app");

mainApp.innerHTML += `<h1>Aula 06</h1>`;
mainApp.innerHTML += `<h2>Estutura de Repetição</h2>`;

const clientes = [
  { nome: "Fulano" },
  { nome: "Ciclano" },
  { nome: "Beltrano" }
];

let tabela = "<table>";
tabela += "<thead><tr><th>Nome</th></tr><thread>"
tabela += "<tbody>";
tabela += "<tr><td>Fulano</td></tr>";
tabela += "<tr><td>Ciclano</td></tr>";
tabela += "<tr><td>Beltrano</td></tr>";
tabela += "</tbody>"
tabela += "</table>";
mainApp.innerHTML += tabela;

mainApp.innerHTML += `<h3>for Each</h3>`;


clientes.forEach(function(cliente) {
  mainApp.innerHTML += `<p>${cliente.nome}</p>`;
});


mainApp.innerHTML += `<h3>for in</h3>`;

const pessoa = {
  nome: "Fulano", idade: 90, end: "RJ", id: 1
};
mainApp.innerHTML += `<p>Nome: ${pessoa.nome}</p>`;
mainApp.innerHTML += `<p>Nome: ${pessoa['nome']}</p>`;
for (let prop in pessoa) {
  mainApp.innerHTML += `<p>${prop}: ${pessoa[prop]}</p>`;
}

mainApp.innerHTML += `<h3>for of</h3>`;
// const nomes = ["Fulano", "Ciclano", "Beltrano"];
/* for (let nome of nomes) {
  mainApp.innerHTML += `<p>${nome}</p>`;
} */
const pessoas = [
  { nome: "Fulano" },
  { nome: "Ciclano" },
  { nome: "Beltrano" }
];
for (let pessoa of pessoas) {
  mainApp.innerHTML += `<p>${pessoa.nome}</p>`;
}

/* for (let i = 0; i < nomes.length; i++) {
  mainApp.innerHTML += `<p>${nomes[i]}</p>`;
} */


mainApp.innerHTML += `<h3>FOR</h3>`;

/* for (let i = 0; i < 10; i++) {
  mainApp.innerHTML += `<p>${i}</p>`;
} */

/* let i = 13;
for (; i < 15; i++) {
  mainApp.innerHTML += `<p>${i}</p>`;
} */

/* let i = 20;
for (;; i++) {
  if (i >= 30) break;
  mainApp.innerHTML += `<p>${i}</p>`;
} */

/* let i = 100;
for (;;) {
  if (i >= 110) break;
  mainApp.innerHTML += `<p>${i}</p>`;
  i++;
} */