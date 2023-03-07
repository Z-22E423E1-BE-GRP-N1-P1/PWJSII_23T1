const inputNomeFunc = nomeFunc;
const inputSalarioFunc = salarioFunc;
const btnSalvarFunc = salvarFunc;
const tbodyFunc = tbFunc;
const tbColunas = document.querySelectorAll("th");
const funcionarios = [
  { nome: "Nikola Tesla", salario: 3_000.00},
];

btnSalvarFunc.onclick = _ => {
  const nome = inputNomeFunc.value;
  const salario = +(inputSalarioFunc.value);
  funcionarios.push({nome, salario});
  limparForm();
  atualizarTabela();
}

const atualizarTabela = (ordem = null) => {
  let funcionariosOrdem = funcionarios;
  if (ordem != null) {
    switch(ordem) {
      case "Nome": funcionariosOrdem = funcionarios.sort((funcA, funcB) => {
          if (funcA.nome > funcB.nome) return 1;
          if (funcA.nome === funcB.nome) return 0;
          if (funcA.nome < funcB.nome) return -1;
        });
    }
  }
  let strTbFunc = "";
  funcionariosOrdem.forEach((func, index) => {
    strTbFunc += "<tr>";
    strTbFunc += `<td>${index + 1}</td>`;
    strTbFunc += `<td>${func.nome}</td>`;
    strTbFunc += `<td>${func.salario.toFixed(2)}</td>`;
    strTbFunc += `<td>`;
    strTbFunc += gerarBotaoExclusao(index);
    strTbFunc += `</td>`;
    strTbFunc += "</tr>"; 
  })
  tbodyFunc.innerHTML = strTbFunc;
}

const gerarBotaoExclusao = index => {
  return `<button onClick="excluirFunc(${index})">`
    + `x`
    + `</button>`;
}

const excluirFunc = index => {
  funcionarios.splice(index, 1);
  atualizarTabela();
}

const limparForm = _ => {
  inputNomeFunc.value = null;
  inputSalarioFunc.value = null;
}

tbColunas.forEach( th => {
  th.onclick = event => {
    atualizarTabela(event.target.innerText);
  }
})

atualizarTabela();