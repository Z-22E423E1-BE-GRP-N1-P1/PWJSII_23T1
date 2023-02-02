const produtos = ["Arroz", "Feijão", "Cenoura"];
const nomes = ["Fulano", "Ciclano"];
/* Dicas */
// length
// Recursiva
// Contador 0 a length

function imprimirArray(indice, colecao) {
  console.log(indice + 1, ". ", colecao[indice]);
  indice++;
  if (indice < colecao.length)
    imprimirArray(indice, colecao);
}

imprimirArray(0, produtos);
imprimirArray(0, nomes);

/* const colecao = ["Fulano", "Ciclano", 4, true, 9.0];

console.log(colecao);

console.log(colecao[2]);
console.log(colecao[0]);

const nomes = ["Ciclano"];
const idades = new Array();

console.log(nomes);
console.log(idades);

console.log(typeof nomes);
console.log(typeof idades);
console.log(typeof colecao);

nomes[1] = "Fulano";
console.log(nomes);

const datas = ['Janeiro', 'Fevereiro', 'março'];

// delete datas[1];
datas[1] = null;
console.log(datas); 

console.log(datas.length); */