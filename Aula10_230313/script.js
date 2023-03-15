const mainApp = document.getElementById("app");

/* let pessoas = [
  { nome: "Fulano", idade: 45 },
  { nome: "Ciclano", idade: 24 },
  { nome: "Beltrano", idade: 12 },
  { nome: "Deltrano", idade: 57 },
  { nome: "Xtrano", idade: 64 },
]; */

let numeros = [2, 45, 6, 87, 9, 43];

const valor = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
})

/* const valor = numeros.reduce((acumulador, prod) => {
  return acumulador + (prod.preco * prod.quantidade);
}) */

mainApp.innerHTML += valor;
// REDUCE


// FILTER
/* const filtrar = pessoa => pessoa.idade > 50;
const mapear = (pessoa, indice) => `<p>${indice}: ${pessoa.nome}</p>`;
const imprimir = pessoa => mainApp.innerHTML += pessoa;

pessoas
  .filter(filtrar)
  .map(mapear)
  .forEach(imprimir); */

/* const filtrar = (pessoa) => {
  if (pessoa.idade > 50) return true;
  else return false;
}; */
/* const filtrar = (pessoa) => {
  return pessoa.idade > 50;
};
const mapear = (pessoa, indice) => {
  return `<p>${indice}: ${pessoa.nome}</p>`;
};
const imprimir = (pessoa) => {
  mainApp.innerHTML += pessoa;
};

pessoas
  .filter(filtrar)
  .map(mapear)
  .forEach(imprimir); */


/* const fPessoas = pessoas.filter((pessoa) => {
  if (pessoa.idade > 50) return true;
  else return false;
}); */


/* fPessoas.forEach((pessoa) => {
  mainApp.innerHTML += `<p>${pessoa.nome}</p>`;
}); */

// MAP
// const mapear = (pessoa, indice/* , pessoas */) => {
//   // return `<p>${indice}: ${pessoa.nome} [${pessoas}]</p>`;
//   return `<p>${indice}: ${pessoa.nome}</p>`;
// };
// const imprimir = (pessoa) => {
//   mainApp.innerHTML += pessoa;
// };
// pessoas
//   .map(mapear) // '<p>undefined</p>'
//   .forEach(imprimir);

/* const pPessoas = pessoas.map((pessoa) => {
  return `<p>${pessoa.nome}</p>`;
});
// [`<p>Fulano</p>`, ...]

pPessoas.forEach((pessoa) => {
  mainApp.innerHTML += pessoa;
}); */

/* pessoas.forEach((pessoa) => {
  mainApp.innerHTML += `<p>${pessoa.nome}</p>`;
}); */