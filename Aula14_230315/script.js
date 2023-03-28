const getEl = id => document.getElementById(id);

const prodNome = getEl("prodNome");
const prodPreco = getEl("prodPreco");
const prodQuant = getEl("prodQuant");
const btnSalvar = getEl("btnSalvar");
const buscaProd = getEl("buscaProd");
const btnFiltrar = getEl("btnFiltrar");
const tBProdutos = getEl("tBProdutos");
const infoQuant = getEl("infoQuant");
const infoTotal = getEl("infoTotal");

const produtos = [];

btnSalvar.onclick = () => {
  const nome = prodNome.value;
  const preco = prodPreco.value;
  const quant = prodQuant.value;
  produtos.push({ nome, preco, quant });
  atualizarTabela();
}

btnFiltrar.onclick = () => {
  const busca = buscaProd.value;
  const listaFiltrada = produtos.filter(prod => {
    const lwNome = prod.nome.toLowerCase();
    const lwBusca = busca.toLowerCase();
    const fNome = lwNome.includes(lwBusca);

    return fNome;
  })
}

const atualizarTabela = () => {
  let strTb = "";
  produtos.forEach((prod, index) => {
    strTb += "<tr>";
    strTb += `<td>${index + 1}</td>`;
    strTb += `<td>${prod.nome}</td>`;
    strTb += `<td>${prod.preco}</td>`;
    strTb += `<td>${prod.quant}</td>`;
    strTb += `<td>${prod.preco * prod.quant}</td>`;
    strTb += "</tr>"; 
  })
  tBProdutos.innerHTML = strTb;
}