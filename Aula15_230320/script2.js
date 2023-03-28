let produtos = [
  {
    nome:"fulano",
    preco:"20.50",
    quantidade:2

  },
    {
    nome:"beltrano",
    preco:"30.60",
    quantidade:6

  },
    {
    nome:"cicrano",
    preco:"90.20",
    quantidade:67

  },
    {
    nome:"xtrano",
    preco:"10.70",
    quantidade:59

  },
    {
    nome:"outromano",
    preco:"20.30",
    quantidade:10

  }, 
  {
    nome:"fulano 2",
    preco:"20.50",
    quantidade:2
  }
]

/* function filterItems(arr, query){
  return arr.filter((el) => {
    if (
      el.nome.includes(query) ||
      el.preco == query) {
        return true;
      }
  });
} */

function filterItems(arr, query){
  return arr.filter(
    (el) => el.nome.includes(query) ||
      el.preco == query
  );
}

filterItems(produtos, 20.50).forEach(prod => {
  content.innerHTML += `<p>
  ${prod.nome} 
  (R$ ${prod.preco})
  </p>`; 
})

filterItems(produtos, "xtrano").forEach(prod => {
  content.innerHTML += `<p>
  ${prod.nome} 
  (R$ ${prod.preco})
  </p>`; 
})