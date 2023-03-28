const docId = (id) => document.getElementById(id);

const divMsg = docId("divMsg");
const divMaoBanca = docId("divMaoBanca");
const divMaoJogador = docId("divMaoJogador");
const btnPegarCarta = docId("btnPegarCarta");

let deck = [];
const jogador = [];
const banca = [];

fetch("./cartas.json")
  .then(async resp => resp.json())
  .then(cartas => deck = cartas)
  .catch(err => showError(err));

btnPegarCarta.onclick = () => {
  pegarCartaDeck(jogador);
  if (calcularPontosMao(jogador) > 21) {
    showError("Você perdeu!");
    btnPegarCarta.disabled = true;
  }
}

function pegarCartaDeck(elMao) {
  let sorte = Math.random();
  sorte = sorte * deck.length;
  sorte = Math.floor(sorte);
  let carta = deck.splice(sorte, 1);
  carta = carta[0];
  elMao.push(carta);
  atualizarMesa()
}

function calcularPontosMao(mao) {
  return mao.reduce((acc, carta) => acc + carta.pontos, 0);
}

function passarJogada() {
  
}

function reiniciarJogo() {
  
}

function atualizarMesa() {
  divMaoJogador.innerHTML = null;
  let maoJogador = "";
  let valorMaoJogador = calcularPontosMao(jogador);
  jogador.forEach(carta => {
    maoJogador += `<img src='./img/${carta.img}' />`;
  })
  valorMaoJogador = `<span class="pontos_mao">${valorMaoJogador}</span>`;
  maoJogador = valorMaoJogador + maoJogador;
  divMaoJogador.innerHTML += maoJogador;
}

function showError(err) {
  divMsg.innerHTML = `${err}`
}