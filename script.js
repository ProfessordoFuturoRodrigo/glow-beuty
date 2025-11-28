const produtos = [
  {
    nome: "Batom Matte Rosê",
    preco: 39.90,
    imagem: "batom-safe-red.webp"
  },
  {
    nome: "Base Líquida Natural",
    preco: 59.90,
    imagem: "batom-safe-red.webp"
  },
  {
    nome: "Máscara de Cílios Volume Max",
    preco: 49.90,
    imagem: "batom-safe-red.webp"
  },
  {
    nome: "Paleta de Sombras Glam",
    preco: 89.90,
    imagem: "batom-safe-red.webp"
  }
];

const lista = document.getElementById("lista-produtos");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.classList.add("produto");

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco.toFixed(2)}</p>
    <button class="btn-comprar">Comprar</button>
  `;

  lista.appendChild(card);
});

document.getElementById("btn-ver-produtos").addEventListener("click", () => {
  document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
});
